// Writes a static HTML file for every page in every language, plus the
// sitemap, robots.txt, llms.txt and 404 page. Runs after the client and
// server builds (see "build" in package.json).
//
//   /            -> dist/index.html        /es          -> dist/es.html
//   /privacy     -> dist/privacy.html      /es/privacy  -> dist/es/privacy.html
//
// Flat .html files work with clean URLs on Vercel (cleanUrls), Netlify,
// Cloudflare Pages, GitHub Pages and nginx (try_files $uri $uri.html).

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssr = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);
const { render, allUrls, dictionaries, site, plain, fill, baseVars } = ssr;

const template = readFileSync(join(dist, "index.html"), "utf8");
const manifest = JSON.parse(readFileSync(join(dist, ".vite", "manifest.json"), "utf8"));

const errors = [];
const fail = (msg) => errors.push(msg);

// Fonts used above the fold, preloaded to avoid a late font swap.
const fontPreloads = readdirSync(join(dist, "assets"))
  .filter((f) => /^(fredoka|dm-sans)-latin-wght-normal-[\w-]+\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`);
if (fontPreloads.length < 2) fail(`expected 2 font preloads, found ${fontPreloads.length}`);

function dictPreload(lang) {
  const entry = manifest[`src/i18n/dictionaries/${lang}.ts`];
  if (!entry) {
    fail(`no chunk for dictionary ${lang}`);
    return "";
  }
  return `<link rel="modulepreload" href="/${entry.file}" />`;
}

const heroPreload =
  `<link rel="preload" as="image" href="/img/shots/bees.webp" ` +
  `imagesrcset="/img/shots/bees-800.webp 800w, /img/shots/bees.webp 1600w" ` +
  `imagesizes="(min-width: 1024px) 600px, 92vw" fetchpriority="high" />`;

function page(url, outFile, ssrPath) {
  const r = render(url);
  if (!r.html || r.html.length < 2000) fail(`${url}: rendered HTML is unexpectedly small`);
  if (!/<h1[\s>]/.test(r.html)) fail(`${url}: no <h1>`);

  const text = r.html.replace(/<[^>]+>/g, " ");
  const leftover = text.match(/\{[a-zA-Z]+\}|\*\*[^*]+\*\*|\]\([^)]+\)/);
  if (leftover) fail(`${url}: unformatted copy "${leftover[0]}"`);

  const isHome = r.found && (url === "/" || /^\/(es|fr)$/.test(url));
  const head = [r.head, ...fontPreloads, dictPreload(r.lang), isHome ? heroPreload : ""]
    .filter(Boolean)
    .join("\n    ");

  const out = template
    .replace(/<html lang="[^"]*"/, `<html lang="${r.htmlLang}"`)
    .replace("<!--app-head-->", head)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-ssr-path="${ssrPath}">${r.html}</div>`);

  if (out.includes("<!--app-")) fail(`${url}: template placeholder not replaced`);
  const file = join(dist, outFile);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, out);
  return { url, file: outFile, bytes: Buffer.byteLength(out) };
}

const written = [];
for (const { url } of allUrls()) {
  const outFile = url === "/" ? "index.html" : `${url.slice(1)}.html`;
  written.push(page(url, outFile, url));
}
// Shared 404 page. Its ssr-path never matches a real URL, so the browser
// renders it fresh in the language of the requested path.
written.push(page("/404", "404.html", "/__404"));

// ------------------------------------------------------------- sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const byNeutral = new Map();
for (const u of allUrls()) {
  const neutral = u.url.replace(/^\/(es|fr)(?=\/|$)/, "") || "/";
  if (!byNeutral.has(neutral)) byNeutral.set(neutral, []);
  byNeutral.get(neutral).push(u);
}
const abs = (p) => site.url + (p === "/" ? "/" : p);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...allUrls().map((u) => {
    const neutral = u.url.replace(/^\/(es|fr)(?=\/|$)/, "") || "/";
    const group = byNeutral.get(neutral);
    const legal = ["privacy", "terms", "cookies"].includes(u.key);
    return [
      "  <url>",
      `    <loc>${abs(u.url)}</loc>`,
      `    <lastmod>${legal ? site.legalUpdated : today}</lastmod>`,
      `    <changefreq>${u.key === "home" ? "weekly" : "monthly"}</changefreq>`,
      `    <priority>${u.key === "home" ? "1.0" : legal ? "0.4" : "0.7"}</priority>`,
      ...group.map((g) => `    <xhtml:link rel="alternate" hreflang="${g.lang}" href="${abs(g.url)}" />`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(neutral)}" />`,
      "  </url>",
    ].join("\n");
  }),
  "</urlset>",
  "",
].join("\n");
writeFileSync(join(dist, "sitemap.xml"), sitemap);

// -------------------------------------------------------------- robots.txt
writeFileSync(
  join(dist, "robots.txt"),
  ["User-agent: *", "Allow: /", "", `Sitemap: ${site.url}/sitemap.xml`, ""].join("\n")
);

// ---------------------------------------------------------------- llms.txt
const en = dictionaries.en;
const v = baseVars(en);
const t = (s) => plain(fill(s, { ...v, rating: "4.5", count: "6,592" }));
const llms = [
  `# ${en.app.name} – ${en.app.tagline}`,
  "",
  `> ${t(en.meta.home.description)}`,
  "",
  `${t(en.hero.subtitle)} Published by ${site.company} (${site.url}).`,
  "",
  "## Key facts",
  `- Platform: Android (Google Play): ${site.playUrl}`,
  `- Ages: ${site.ageMin}–${site.ageMax} (Google Play: Teacher Approved, ages up to 5; ${site.contentRating})`,
  `- Price: free to download, optional in-app purchases. No ads.`,
  `- Rating on Google Play: ${site.ratingValue} from ${site.ratingCount} ratings; ${site.downloads} downloads`,
  `- Content: ${site.games} games, numbers 1 to 10, ${site.words}+ forest vocabulary words`,
  `- Settings: vocabulary difficulty, music on/off, button lock`,
  `- Intro video: https://www.youtube.com/watch?v=${site.youtubeId}`,
  "",
  "## What children practise",
  ...en.features.items.map((i) => `- ${t(i.title)}: ${t(i.body)}`),
  "",
  "## Pages",
  `- [Home](${site.url}/): overview, video, screenshots, FAQ`,
  `- [Help Centre](${site.url}/support): ${t(en.meta.support.description)}`,
  `- [Contact](${site.url}/contact): ${t(en.meta.contact.description)}`,
  `- [Privacy Policy](${site.url}/privacy): ${t(en.meta.privacy.description)}`,
  `- [Terms of Use](${site.url}/terms): ${t(en.meta.terms.description)}`,
  `- [Cookie Policy](${site.url}/cookies): ${t(en.meta.cookies.description)}`,
  `- Spanish: ${site.url}/es · French: ${site.url}/fr`,
  "",
  "## Frequently asked questions",
  ...en.faq.categories.flatMap((c) => c.items.map((i) => `- ${t(i.q)} ${t(i.a)}`)),
  "",
  "## Contact",
  `- Email: ${site.email}`,
  `- Phone: ${site.phoneDisplay}`,
  `- Address: ${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.postcode}, ${site.address.country}`,
  "",
].join("\n");
writeFileSync(join(dist, "llms.txt"), llms);

// ------------------------------------------------------------------ tidy up
if (existsSync(join(dist, ".vite"))) rmSync(join(dist, ".vite"), { recursive: true, force: true });

for (const w of written) console.log(`  ${w.url.padEnd(14)} -> ${w.file.padEnd(18)} ${(w.bytes / 1024).toFixed(1)} kB`);
console.log(`  sitemap.xml (${allUrls().length} URLs), robots.txt, llms.txt`);

if (errors.length) {
  console.error("\nPrerender failed:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log("Prerender complete.");
