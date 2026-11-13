import { addressLine, links, site } from "@/data/site";
import type { Dict } from "@/i18n/dictionaries/en";
import type { Lang } from "@/i18n/config";

export type Vars = Record<string, string | number>;

/** Placeholders available in every translated string. */
export function baseVars(dict: Dict): Vars {
  return {
    app: dict.app.name,
    brand: site.brand,
    company: site.company,
    email: site.email,
    phone: site.phoneDisplay,
    phoneHref: site.phoneHref,
    address: addressLine,
    playUrl: site.playUrl,
    games: site.games,
    words: site.words,
    downloads: site.downloads,
    duration: site.videoDurationLabel,
    year: site.copyrightYear,
    ...links,
  };
}

export function fill(template: string, vars: Vars): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

/**
 * French typography: narrow no-break space before ? ! ; and no-break space
 * before : and inside « ». Applied at render time so the dictionaries stay
 * easy to edit.
 */
export function typography(text: string, lang: Lang): string {
  if (lang !== "fr") return text;
  return text
    .replace(/ ([?!;])/g, "\u202F$1")
    .replace(/ :(?=\s|$)/g, "\u00A0:")
    .replace(/« /g, "«\u00A0")
    .replace(/ »/g, "\u00A0»");
}

// Number and date formatting is done by hand rather than with Intl so the
// prerendered HTML and the browser always produce the same characters (ICU
// versions differ between Node and browsers, which would break hydration).

const GROUP: Record<Lang, string> = { en: ",", es: ".", fr: "\u202F" };
const DECIMAL: Record<Lang, string> = { en: ".", es: ",", fr: "," };

export function formatInt(n: number, lang: Lang): string {
  const s = String(Math.round(n));
  if (lang === "es" && s.length <= 4) return s; // RAE: no grouping for 4 digits
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, GROUP[lang]);
}

export function formatDecimal(n: number, lang: Lang, digits = 1): string {
  return n.toFixed(digits).replace(".", DECIMAL[lang]);
}

const MONTHS: Record<Lang, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
};

/** "2026-11-13" -> "13 November 2026" / "13 de noviembre de 2026" / "13 novembre 2026" */
export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = MONTHS[lang][m - 1];
  if (lang === "es") return `${d} de ${month} de ${y}`;
  if (lang === "fr") return `${d === 1 ? "1er" : d} ${month} ${y}`;
  return `${d} ${month} ${y}`;
}
