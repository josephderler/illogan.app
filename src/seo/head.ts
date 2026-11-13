import { site, addressLine } from "@/data/site";
import { LANGS, LANG_META, localePath, type Lang } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/en";
import { baseVars, fill } from "@/i18n/format";
import { pagePath, type PageKey } from "@/routes";

// Builds the <head> for every page. The prerender writes it into the static
// HTML; on client-side navigation useDocumentHead() updates the same tags
// (they carry a data-h attribute so they can be found again).

export interface HeadData {
  lang: Lang;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogImageAlt: string;
  ogLocale: string;
  alternates: { hreflang: string; href: string }[];
  robots: string;
  jsonLd: object[];
}

const abs = (path: string) => site.url + (path === "/" ? "/" : path);

export function pageHead(key: PageKey | "notFound", lang: Lang, dict: Dict): HeadData {
  const vars = baseVars(dict);
  const meta = dict.meta[key];
  const neutral = key === "notFound" ? null : pagePath(key);
  const canonical = neutral ? abs(localePath(lang, neutral)) : abs(localePath(lang, "/"));

  const alternates = neutral
    ? [
        ...LANGS.map((l) => ({ hreflang: LANG_META[l].htmlLang, href: abs(localePath(l, neutral)) })),
        { hreflang: "x-default", href: abs(localePath("en", neutral)) },
      ]
    : [];

  return {
    lang,
    title: fill(meta.title, vars),
    description: fill(meta.description, vars),
    canonical,
    ogImage: `${site.url}/og-${lang}.png`,
    ogImageAlt: `${dict.app.name}: ${dict.app.tagline}`,
    ogLocale: LANG_META[lang].ogLocale,
    alternates,
    robots: key === "notFound" ? "noindex, follow" : "index, follow, max-image-preview:large",
    jsonLd: key === "notFound" ? [] : jsonLd(key, lang, dict, canonical),
  };
}

function jsonLd(key: PageKey, lang: Lang, dict: Dict, url: string): object[] {
  const vars = baseVars(dict);
  const inLanguage = LANG_META[lang].htmlLang;
  const orgId = `${site.url}/#organization`;
  const siteId = `${site.url}/#website`;
  const appId = `${site.url}/#app`;

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: site.brand,
    legalName: site.company,
    url: site.url + "/",
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/app-icon-512.png`,
      width: 512,
      height: 512,
    },
    email: site.email,
    telephone: site.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email,
        telephone: site.phoneHref,
        availableLanguage: ["English", "Spanish", "French"],
      },
    ],
    sameAs: [site.playUrl],
  };

  const website = {
    "@type": "WebSite",
    "@id": siteId,
    url: site.url + "/",
    name: site.brand,
    alternateName: dict.app.name,
    inLanguage: LANGS.map((l) => LANG_META[l].htmlLang),
    publisher: { "@id": orgId },
  };

  const page: Record<string, unknown> = {
    "@type": key === "contact" ? "ContactPage" : key === "support" ? "FAQPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: fill(dict.meta[key].title, vars),
    description: fill(dict.meta[key].description, vars),
    inLanguage,
    isPartOf: { "@id": siteId },
    publisher: { "@id": orgId },
  };

  const graph: object[] = [organization, website, page];

  if (key === "home") {
    const shots = ["bees", "write", "fingers", `numbers-${lang}`, "missing", `vocab-${lang}`];
    page.about = { "@id": appId };
    page.primaryImageOfPage = `${site.url}/og-${lang}.png`;
    graph.push(
      {
        "@type": "MobileApplication",
        "@id": appId,
        name: dict.app.name,
        alternateName: `${dict.app.name} – ${dict.app.tagline}`,
        description: fill(dict.meta.home.description, vars),
        operatingSystem: "Android",
        applicationCategory: "EducationalApplication",
        applicationSubCategory: "Early learning, Mathematics",
        contentRating: site.contentRating,
        image: `${site.url}/app-icon-512.png`,
        screenshot: shots.map((s) => `${site.url}/img/shots/${s}.webp`),
        url: site.url + "/",
        installUrl: site.playUrl,
        downloadUrl: site.playUrl,
        inLanguage,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: site.ageMin,
          suggestedMaxAge: site.ageMax,
        },
        educationalUse: "Early numeracy",
        teaches: ["Counting from 1 to 10", "Writing numbers", "Comparing quantities", "Number sequences", "Vocabulary"],
        publisher: { "@id": orgId },
        author: { "@id": orgId },
      },
      {
        "@type": "VideoObject",
        name: fill(dict.video.iframeTitle, vars),
        description: fill(dict.video.subtitle, vars),
        thumbnailUrl: [`${site.url}/img/video-poster.webp`],
        uploadDate: site.videoUploadDate,
        duration: site.videoDuration,
        embedUrl: `https://www.youtube-nocookie.com/embed/${site.youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${site.youtubeId}`,
        inLanguage: "en",
        publisher: { "@id": orgId },
      }
    );
  } else {
    page.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: dict.common.breadcrumbHome,
          item: abs(localePath(lang, "/")),
        },
        { "@type": "ListItem", position: 2, name: breadcrumbName(key, dict), item: url },
      ],
    };
  }

  if (key === "support") {
    page.mainEntity = dict.faq.categories.flatMap((c) =>
      c.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: plain(fill(item.a, vars)) },
      }))
    );
  }

  if (key === "privacy" || key === "terms" || key === "cookies") {
    page.dateModified = site.legalUpdated;
  }

  return [{ "@context": "https://schema.org", "@graph": graph }];
}

function breadcrumbName(key: PageKey, dict: Dict): string {
  switch (key) {
    case "support":
      return dict.support.eyebrow;
    case "contact":
      return dict.nav.contact;
    case "privacy":
      return dict.legal.privacy.title;
    case "terms":
      return dict.legal.terms.title;
    case "cookies":
      return dict.legal.cookies.title;
    default:
      return dict.common.breadcrumbHome;
  }
}

/** Strip the inline markup used in translations: **x** and [label](href). */
export function plain(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}

const escAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Head markup for the static HTML. */
export function renderHead(h: HeadData): string {
  const tags: string[] = [
    `<title data-h="title">${escAttr(h.title)}</title>`,
    `<meta name="description" content="${escAttr(h.description)}" data-h="description" />`,
    `<meta name="robots" content="${h.robots}" data-h="robots" />`,
    `<link rel="canonical" href="${h.canonical}" data-h="canonical" />`,
    ...h.alternates.map(
      (a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" data-h="alt-${a.hreflang}" />`
    ),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escAttr(site.brand)}" />`,
    `<meta property="og:url" content="${h.canonical}" data-h="og:url" />`,
    `<meta property="og:title" content="${escAttr(h.title)}" data-h="og:title" />`,
    `<meta property="og:description" content="${escAttr(h.description)}" data-h="og:description" />`,
    `<meta property="og:image" content="${h.ogImage}" data-h="og:image" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escAttr(h.ogImageAlt)}" data-h="og:image:alt" />`,
    `<meta property="og:locale" content="${h.ogLocale}" data-h="og:locale" />`,
    ...LANGS.filter((l) => LANG_META[l].ogLocale !== h.ogLocale).map(
      (l) => `<meta property="og:locale:alternate" content="${LANG_META[l].ogLocale}" />`
    ),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escAttr(h.title)}" data-h="twitter:title" />`,
    `<meta name="twitter:description" content="${escAttr(h.description)}" data-h="twitter:description" />`,
    `<meta name="twitter:image" content="${h.ogImage}" data-h="twitter:image" />`,
    `<meta name="author" content="${escAttr(site.brand)}" />`,
    `<meta name="google-play-app" content="app-id=${site.packageId}" />`,
    ...h.jsonLd.map(
      (o) =>
        `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`
    ),
  ];
  return tags.join("\n    ");
}

/** For the llms.txt summary. */
export function contactSummary(): string {
  return `${site.email} · ${site.phoneDisplay} · ${addressLine}, ${site.address.country}`;
}
