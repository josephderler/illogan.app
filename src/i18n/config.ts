// Language configuration shared by the browser app, the server renderer and
// the build scripts. English lives at the site root ("/privacy"); Spanish and
// French get a path prefix ("/es/privacy", "/fr/privacy").

export const LANGS = ["en", "es", "fr"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export const LANG_META: Record<
  Lang,
  { label: string; short: string; htmlLang: string; ogLocale: string }
> = {
  en: { label: "English", short: "EN", htmlLang: "en", ogLocale: "en_GB" },
  es: { label: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES" },
  fr: { label: "Français", short: "FR", htmlLang: "fr", ogLocale: "fr_FR" },
};

export function isLang(value: string | undefined | null): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

/** Language encoded in a pathname ("/es/terms" -> "es", "/terms" -> "en"). */
export function langFromPath(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) && first !== DEFAULT_LANG ? first : DEFAULT_LANG;
}

/** Pathname without its language prefix, always starting with "/". */
export function stripLang(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isLang(parts[0]) && parts[0] !== DEFAULT_LANG) parts.shift();
  return "/" + parts.join("/");
}

/**
 * Build a localized path. `to` is a language-neutral path such as "/",
 * "/privacy" or "/#features".
 */
export function localePath(lang: Lang, to: string): string {
  const [pathAndQuery, hash] = to.split("#");
  const clean = pathAndQuery === "" ? "/" : pathAndQuery;
  let path: string;
  if (lang === DEFAULT_LANG) {
    path = clean;
  } else {
    path = clean === "/" ? `/${lang}` : `/${lang}${clean}`;
  }
  return hash !== undefined ? `${path}#${hash}` : path;
}

/** Same page in another language. */
export function switchLangPath(pathname: string, hash: string, target: Lang): string {
  return localePath(target, stripLang(pathname)) + (hash || "");
}
