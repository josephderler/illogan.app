// Builds every image the site serves from the originals in assets-src/.
// Run with: npm run assets   (outputs are committed, so this only needs to run
// again when a source image changes)
//
// - Screenshots: the store screenshots carry a caption strip along the bottom
//   (Turkish in the originals). It is cropped off and the caption is rendered
//   as real, translated text on the site instead. The two scenes that show
//   words inside the game (number names, vocabulary) use the English, Spanish
//   and French store versions so the game matches the page language.
// - App icon, favicons, PWA icons, Teacher Approved badge, video poster,
//   Google Play badges and one Open Graph image per language.

import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = (...p) => join(root, "assets-src", ...p);
const out = (...p) => join(root, "public", ...p);
for (const d of ["img/shots", "img/badges"]) mkdirSync(out(d), { recursive: true });

const RATIO = 2.25; // screenshot crop (9:4) once the caption strip is removed

async function shot(file, name, { top = 0 } = {}) {
  const img = sharp(file);
  const { width, height } = await img.metadata();
  const h = Math.round(width / RATIO);
  const y = Math.min(top, height - h);
  const base = sharp(file).extract({ left: 0, top: y, width, height: h });
  await base.clone().resize(1600).webp({ quality: 80 }).toFile(out("img/shots", `${name}.webp`));
  await base.clone().resize(800).webp({ quality: 78 }).toFile(out("img/shots", `${name}-800.webp`));
  console.log(`shot ${name} (${width}x${height} -> ${width}x${h} @ y=${y})`);
}

// Language-neutral scenes (user-supplied originals, 2208x1242). Files 4 and 8
// show Turkish words inside the game, so the localized store versions below
// are used for those two scenes instead.
const neutral = { 1: "bees", 2: "fingers", 3: "write", 5: "missing", 6: "fewer", 7: "order" };
for (const [n, name] of Object.entries(neutral)) {
  await shot(src("screenshots-tr", `${n}.webp`), name);
}

// Localized scenes (Google Play store versions)
for (const lang of ["en", "es", "fr"]) {
  await shot(src("store", `${lang}-numbers.jpg`), `numbers-${lang}`);
  const vocab = lang === "en" ? src("store", "en-vocab.png") : src("store", `${lang}-vocab.jpg`);
  // The English vocabulary screenshot has no caption strip; centre the crop.
  await shot(vocab, `vocab-${lang}`, lang === "en" ? { top: 120 } : {});
}

// ---------------------------------------------------------------- app icon
const icon = src("app-icon-512.png");
const roundMask = (size, r) =>
  Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></svg>`);

async function roundedIcon(size) {
  return sharp(icon)
    .resize(size, size)
    .composite([{ input: roundMask(size, Math.round(size * 0.22)), blend: "dest-in" }])
    .png()
    .toBuffer();
}

await sharp(await roundedIcon(128)).webp({ quality: 90 }).toFile(out("img", "app-icon-128.webp"));
await sharp(await roundedIcon(256)).webp({ quality: 90 }).toFile(out("img", "app-icon-256.webp"));
await sharp(icon).resize(512, 512).png().toFile(out("app-icon-512.png"));
await sharp(await roundedIcon(192)).png().toFile(out("icon-192.png"));
await sharp(await roundedIcon(512)).png().toFile(out("icon-512.png"));
await sharp(icon).resize(180, 180).png().toFile(out("apple-touch-icon.png"));

// Maskable icon: keep the artwork inside the safe zone on the icon's own green.
const { data: px } = await sharp(icon).extract({ left: 500, top: 250, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
const green = `#${[px[0], px[1], px[2]].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
console.log("icon background", green);
await sharp({ create: { width: 512, height: 512, channels: 4, background: green } })
  .composite([{ input: await sharp(icon).resize(410, 410).png().toBuffer(), top: 51, left: 51 }])
  .png()
  .toFile(out("icon-maskable-512.png"));

// favicon.ico with 16px and 32px PNG frames
function ico(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  const dir = Buffer.alloc(16 * frames.length);
  let offset = 6 + 16 * frames.length;
  frames.forEach((f, i) => {
    const o = i * 16;
    dir.writeUInt8(f.size, o);
    dir.writeUInt8(f.size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(f.buf.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += f.buf.length;
  });
  return Buffer.concat([header, dir, ...frames.map((f) => f.buf)]);
}
writeFileSync(
  out("favicon.ico"),
  ico([
    { size: 16, buf: await roundedIcon(16) },
    { size: 32, buf: await roundedIcon(32) },
  ])
);

// ------------------------------------------------------ teacher badge, poster
await sharp(src("teacher.png")).resize(64, 64).webp({ quality: 90 }).toFile(out("img", "teacher-approved-64.webp"));
await sharp(src("teacher.png")).resize(400, 400).webp({ quality: 90 }).toFile(out("img", "teacher-approved-400.webp"));

await sharp(src("video-poster.jpg")).resize(1280, 720).webp({ quality: 80 }).toFile(out("img", "video-poster.webp"));
await sharp(src("video-poster.jpg")).resize(640, 360).webp({ quality: 78 }).toFile(out("img", "video-poster-640.webp"));

// --------------------------------------------------------- Google Play badges
const badgeSize = {};
for (const lang of ["en", "es", "fr"]) {
  const trimmed = await sharp(src(`google-play-badge-${lang}.png`)).trim().png().toBuffer({ resolveWithObject: true });
  await sharp(trimmed.data).webp({ lossless: true }).toFile(out("img/badges", `google-play-${lang}.webp`));
  badgeSize[lang] = [trimmed.info.width, trimmed.info.height];
}
console.log("badge sizes", JSON.stringify(badgeSize));

// --------------------------------------------------------------- OG images
const og = {
  en: {
    title: ["Learning Numbers", "Kids Games"],
    sub: ["Count, trace and learn", "numbers from 1 to 10"],
    pill: "Teacher Approved on Google Play",
  },
  es: {
    title: ["Juegos de números", "para niños"],
    sub: ["Contar, trazar y aprender", "los números del 1 al 10"],
    pill: "Aprobada por profesores en Google Play",
  },
  fr: {
    title: ["Jeux éducatifs", "les nombres 123"],
    sub: ["Compter, tracer et apprendre", "les nombres de 1 à 10"],
    pill: "Approuvé par les enseignants sur Google Play",
  },
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ogIcon = await roundedIcon(132);
const ogBadge = await sharp(src("teacher.png")).resize(44, 44).png().toBuffer();
// Keep the tilted screenshot to the right of x=700 so it never covers the
// longest title line ("Juegos de números" at 60px ends near x=650).
const shotW = 400;
const shotH = Math.round(shotW / RATIO);
const rectMask = (w, h, r) =>
  Buffer.from(`<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" ry="${r}"/></svg>`);
const frame = await sharp(out("img/shots", "bees.webp"))
  .resize(shotW, shotH)
  .composite([{ input: rectMask(shotW, shotH, 28), blend: "dest-in" }])
  .png()
  .toBuffer();
const framed = await sharp({
  create: { width: shotW + 24, height: shotH + 24, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    { input: Buffer.from(`<svg width="${shotW + 24}" height="${shotH + 24}"><rect width="${shotW + 24}" height="${shotH + 24}" rx="38" ry="38" fill="#ffffff"/></svg>`) },
    { input: frame, top: 12, left: 12 },
  ])
  .png()
  .toBuffer();
const tilted = await sharp(framed).rotate(-5, { background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
const tiltedMeta = await sharp(tilted).metadata();

for (const [lang, c] of Object.entries(og)) {
  const pillW = Math.round(c.pill.length * 12.4) + 92;
  const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8cc2ff"/>
      <stop offset="0.5" stop-color="#4f97f5"/>
      <stop offset="1" stop-color="#1f6fd6"/>
    </linearGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#ffffff" opacity="0.16"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <circle cx="1080" cy="80" r="150" fill="#ffc83d" opacity="0.9"/>
  <circle cx="1130" cy="600" r="120" fill="#ff4395" opacity="0.55"/>
  <circle cx="40" cy="610" r="90" fill="#2fbf4f" opacity="0.5"/>
  <text x="80" y="292" font-family="Segoe UI, Arial, sans-serif" font-size="60" font-weight="800" fill="#ffffff">${esc(c.title[0])}</text>
  <text x="80" y="362" font-family="Segoe UI, Arial, sans-serif" font-size="60" font-weight="800" fill="#ffffff">${esc(c.title[1])}</text>
  <text x="82" y="428" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#ffffff" opacity="0.92">${esc(c.sub[0])}</text>
  <text x="82" y="468" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#ffffff" opacity="0.92">${esc(c.sub[1])}</text>
  <rect x="80" y="512" width="${pillW}" height="62" rx="31" fill="#ffffff"/>
  <text x="${80 + 66}" y="553" font-family="Segoe UI, Arial, sans-serif" font-size="23" font-weight="700" fill="#13407e">${esc(c.pill)}</text>
  <text x="1120" y="600" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff" opacity="0.9">illogan.app</text>
</svg>`;
  await sharp(Buffer.from(svg))
    .composite([
      { input: ogIcon, top: 64, left: 80 },
      { input: tilted, top: Math.round(300 - tiltedMeta.height / 2), left: 1200 - tiltedMeta.width - 50 },
      { input: ogBadge, top: 521, left: 92 },
    ])
    .png()
    .toFile(out(`og-${lang}.png`));
  console.log(`og-${lang}.png`);
}

console.log("Done.");
