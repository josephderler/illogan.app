// Server entry used only at build time by scripts/prerender.mjs.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "@/App";
import en from "@/i18n/dictionaries/en";
import es from "@/i18n/dictionaries/es";
import fr from "@/i18n/dictionaries/fr";
import { langFromPath, LANG_META } from "@/i18n/config";
import { primeDict } from "@/i18n/load";
import { allUrls, matchPage } from "@/routes";
import { pageHead, renderHead, plain } from "@/seo/head";
import { baseVars, fill } from "@/i18n/format";
import { site } from "@/data/site";

primeDict("en", en);
primeDict("es", es);
primeDict("fr", fr);

export const dictionaries = { en, es, fr };
export { allUrls, plain, fill, baseVars, site };

export function render(url: string) {
  const match = matchPage(url);
  const lang = match?.lang ?? langFromPath(url);
  const dict = dictionaries[lang];
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  const head = renderHead(pageHead(match?.key ?? "notFound", lang, dict));
  return { html, head, lang, htmlLang: LANG_META[lang].htmlLang, found: !!match };
}
