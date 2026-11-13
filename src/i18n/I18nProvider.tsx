import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import { useLocation } from "react-router";
import type { Dict } from "@/i18n/dictionaries/en";
import { LANG_META, langFromPath, localePath, type Lang } from "@/i18n/config";
import { getDict, loadDict } from "@/i18n/load";
import {
  baseVars,
  fill,
  formatDate,
  formatDecimal,
  formatInt,
  typography,
  type Vars,
} from "@/i18n/format";
import { site } from "@/data/site";

export interface I18n {
  lang: Lang;
  /** The dictionary for the active language. */
  t: Dict;
  /** Fill placeholders and apply language typography. */
  f: (text: string, extra?: Vars) => string;
  /** Localize a language-neutral path such as "/privacy" or "/#faq". */
  path: (to: string) => string;
  /** Locale-aware integer formatting (6,592 / 6592 / 6 592). */
  int: (n: number) => string;
  /** Locale-aware date ("2026-11-13" -> "13 November 2026"). */
  date: (iso: string) => string;
  /** Store rating with one decimal (4.5 / 4,5). */
  rating: string;
}

const I18nContext = createContext<I18n | null>(null);

function build(lang: Lang, dict: Dict): I18n {
  const rating = formatDecimal(site.rating, lang);
  const vars: Vars = { ...baseVars(dict), rating, count: formatInt(site.ratingCount, lang) };
  return {
    lang,
    t: dict,
    f: (text, extra) => typography(fill(text, extra ? { ...vars, ...extra } : vars), lang),
    path: (to) => localePath(lang, to),
    int: (n) => formatInt(n, lang),
    date: (iso) => formatDate(iso, lang),
    rating,
  };
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const [, rerender] = useReducer((n: number) => n + 1, 0);
  const cached = getDict(lang);

  // Keep showing the previous language until a newly requested dictionary has
  // loaded. This only happens on back/forward between languages; the language
  // switcher preloads the dictionary before it navigates.
  const active = useRef<{ lang: Lang; dict: Dict } | null>(null);
  if (cached) active.current = { lang, dict: cached };

  useEffect(() => {
    if (!cached) void loadDict(lang).then(() => rerender());
  }, [lang, cached]);

  const current = active.current;
  if (!current) {
    throw new Error(`Dictionary for "${lang}" must be loaded before rendering.`);
  }

  const value = useMemo(() => build(current.lang, current.dict), [current.lang, current.dict]);

  useEffect(() => {
    document.documentElement.lang = LANG_META[value.lang].htmlLang;
  }, [value.lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
