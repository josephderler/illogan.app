import type { ComponentType } from "react";
import { Route, Routes } from "react-router";
import { LANGS, localePath } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop, ScrollManager, SkipLink } from "@/components/Navigation";
import Home from "@/pages/Home";
import Support from "@/pages/Support";
import Contact from "@/pages/Contact";
import { Cookies, Privacy, Terms } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import { PAGES, type PageKey } from "@/routes";

const ELEMENTS: Record<PageKey, ComponentType> = {
  home: Home,
  support: Support,
  contact: Contact,
  privacy: Privacy,
  terms: Terms,
  cookies: Cookies,
};

export default function App() {
  return (
    <I18nProvider>
      <div className="flex min-h-dvh flex-col">
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <Routes>
            {LANGS.flatMap((lang) =>
              PAGES.map((p) => {
                const Page = ELEMENTS[p.key];
                return <Route key={`${lang}${p.path}`} path={localePath(lang, p.path)} element={<Page />} />;
              })
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <ScrollManager />
      </div>
    </I18nProvider>
  );
}
