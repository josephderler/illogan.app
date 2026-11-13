import type { Lang } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/en";

export type ShotKey = keyof Dict["gallery"]["slides"];

/** Image files for a screenshot. Number and vocabulary scenes are localized. */
export function shotFile(key: ShotKey, lang: Lang): string {
  if (key === "numbers") return `numbers-${lang}`;
  if (key === "vocab") return `vocab-${lang}`;
  return key;
}

export function shotSrc(key: ShotKey, lang: Lang) {
  const file = shotFile(key, lang);
  return {
    src: `/img/shots/${file}.webp`,
    srcSet: `/img/shots/${file}-800.webp 800w, /img/shots/${file}.webp 1600w`,
  };
}

export const GALLERY_ORDER: ShotKey[] = [
  "bees",
  "write",
  "fingers",
  "numbers",
  "missing",
  "order",
  "fewer",
  "vocab",
];
