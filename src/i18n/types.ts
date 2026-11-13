// Shapes used inside the translation dictionaries.
//
// Strings may contain light inline markup that <Rich> renders:
//   **bold**            -> <strong>
//   [label](href)       -> link (internal paths are localized automatically)
// and placeholders such as {app}, {brand}, {email} that are filled in from
// src/data/site.ts (see i18n/format.ts).

export type LegalBlock = string | { list: string[] };

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  title: string;
  summary: string;
  sections: LegalSection[];
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface TitledText {
  title: string;
  body: string;
}
