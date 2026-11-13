import type { Dict } from "@/i18n/dictionaries/en";
import type { Lang } from "@/i18n/config";

// Each language is its own chunk, so a visitor only downloads the copy for the
// language they are reading. The server renderer primes the cache with all
// three dictionaries synchronously (see entry-server.tsx).

const cache: Partial<Record<Lang, Dict>> = {};

const loaders: Record<Lang, () => Promise<{ default: Dict }>> = {
  en: () => import("@/i18n/dictionaries/en"),
  es: () => import("@/i18n/dictionaries/es"),
  fr: () => import("@/i18n/dictionaries/fr"),
};

export function getDict(lang: Lang): Dict | undefined {
  return cache[lang];
}

export function primeDict(lang: Lang, dict: Dict): void {
  cache[lang] = dict;
}

export async function loadDict(lang: Lang): Promise<Dict> {
  const hit = cache[lang];
  if (hit) return hit;
  const mod = await loaders[lang]();
  cache[lang] = mod.default;
  return mod.default;
}
