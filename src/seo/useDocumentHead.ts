import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { pageHead } from "@/seo/head";
import type { PageKey } from "@/routes";

// Keeps <head> in sync during client-side navigation. The prerendered HTML
// already contains the right tags for the first page view.

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  if (attr === "text") el.textContent = value;
  else el.setAttribute(attr, value);
}

function meta(key: string, nameAttr: "name" | "property") {
  return () => {
    const m = document.createElement("meta");
    m.setAttribute(nameAttr, key);
    m.dataset.h = key;
    return m;
  };
}

export function useDocumentHead(key: PageKey | "notFound") {
  const { lang, t } = useI18n();

  useEffect(() => {
    const h = pageHead(key, lang, t);
    document.title = h.title;
    setTag('[data-h="description"]', meta("description", "name"), "content", h.description);
    setTag('[data-h="robots"]', meta("robots", "name"), "content", h.robots);
    setTag(
      '[data-h="canonical"]',
      () => {
        const l = document.createElement("link");
        l.rel = "canonical";
        l.dataset.h = "canonical";
        return l;
      },
      "href",
      h.canonical
    );
    for (const [k, v] of [
      ["og:url", h.canonical],
      ["og:title", h.title],
      ["og:description", h.description],
      ["og:image", h.ogImage],
      ["og:image:alt", h.ogImageAlt],
      ["og:locale", h.ogLocale],
    ] as const) {
      setTag(`[data-h="${k}"]`, meta(k, "property"), "content", v);
    }
    for (const [k, v] of [
      ["twitter:title", h.title],
      ["twitter:description", h.description],
      ["twitter:image", h.ogImage],
    ] as const) {
      setTag(`[data-h="${k}"]`, meta(k, "name"), "content", v);
    }

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
    for (const a of h.alternates) {
      const l = document.createElement("link");
      l.rel = "alternate";
      l.hreflang = a.hreflang;
      l.href = a.href;
      l.dataset.h = `alt-${a.hreflang}`;
      document.head.appendChild(l);
    }
  }, [key, lang, t]);
}
