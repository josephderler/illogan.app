import { LANGS, isLang, localePath, type Lang, DEFAULT_LANG } from "@/i18n/config";

export type PageKey = "home" | "support" | "contact" | "privacy" | "terms" | "cookies";

/** Language-neutral paths. Each one exists once per language. */
export const PAGES: { key: PageKey; path: string }[] = [
  { key: "home", path: "/" },
  { key: "support", path: "/support" },
  { key: "contact", path: "/contact" },
  { key: "privacy", path: "/privacy" },
  { key: "terms", path: "/terms" },
  { key: "cookies", path: "/cookies" },
];

export function pagePath(key: PageKey): string {
  return PAGES.find((p) => p.key === key)!.path;
}

/** Every URL the site serves, for the prerender and the sitemap. */
export function allUrls(): { url: string; key: PageKey; lang: Lang }[] {
  return LANGS.flatMap((lang) =>
    PAGES.map((p) => ({ url: localePath(lang, p.path), key: p.key, lang }))
  );
}

/** Resolve a pathname to a known page, or null for a 404. */
export function matchPage(pathname: string): { key: PageKey; lang: Lang } | null {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const parts = clean.split("/").filter(Boolean);
  let lang: Lang = DEFAULT_LANG;
  if (parts.length && isLang(parts[0])) {
    if (parts[0] === DEFAULT_LANG) return null; // "/en/..." is not a URL we serve
    lang = parts.shift() as Lang;
  }
  const rest = "/" + parts.join("/");
  const page = PAGES.find((p) => p.path === rest);
  return page ? { key: page.key, lang } : null;
}
