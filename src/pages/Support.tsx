import { useDeferredValue, useMemo, useState } from "react";
import { Link } from "react-router";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { FaqAccordion } from "@/components/Accordion";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { plain } from "@/seo/head";
import { useDocumentHead } from "@/seo/useDocumentHead";
import {
  ArrowRight,
  ChatCircleDots,
  EnvelopeSimple,
  GearSix,
  Lifebuoy,
  Lightbulb,
  MagnifyingGlass,
  Phone,
  RocketLaunch,
  ShieldCheck,
  ShoppingCart,
  Wrench,
  type Icon,
} from "@/components/icons";

const CATEGORY_ICON: Record<string, Icon> = {
  start: RocketLaunch,
  learning: Lightbulb,
  settings: GearSix,
  purchases: ShoppingCart,
  privacy: ShieldCheck,
  help: Wrench,
};

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function Support() {
  const { t, f, path } = useI18n();
  useDocumentHead("support");
  const [query, setQuery] = useState("");
  const q = normalize(useDeferredValue(query).trim());

  const categories = useMemo(() => {
    if (!q) return t.faq.categories;
    return t.faq.categories
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => normalize(`${i.q} ${plain(f(i.a))}`).includes(q)),
      }))
      .filter((c) => c.items.length > 0);
  }, [q, t, f]);

  const found = categories.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <PageHeader icon={Lifebuoy} eyebrow={t.support.eyebrow} title={f(t.support.title)} crumb={t.support.eyebrow} intro={<p>{f(t.support.intro)}</p>}>
        <form role="search" className="relative mt-7 max-w-xl" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="help-search" className="sr-only">
            {t.support.searchLabel}
          </label>
          <MagnifyingGlass
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-strong"
            weight="bold"
            aria-hidden="true"
          />
          <input
            id="help-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={f(t.support.searchPh)}
            autoComplete="off"
            enterKeyHint="search"
            className="h-14 w-full rounded-2xl bg-white pl-13 pr-5 text-[16px] text-foreground shadow-card outline-none ring-1 ring-hairline transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary-strong"
          />
        </form>
      </PageHeader>

      <div className="container-page grid gap-10 pb-24 pt-4 lg:grid-cols-[260px_1fr] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav aria-label={t.support.topics} className="rounded-[22px] bg-white p-3 shadow-card ring-1 ring-hairline">
            <p className="px-3 pb-2 pt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {t.support.topics}
            </p>
            <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {t.faq.categories.map((c) => {
                const CatIcon = CATEGORY_ICON[c.id] ?? Lifebuoy;
                return (
                  <li key={c.id}>
                    <a
                      href={`#topic-${c.id}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-sky-50 hover:text-foreground"
                    >
                      <CatIcon className="h-5 w-5 shrink-0 text-primary-strong" weight="duotone" aria-hidden="true" />
                      {f(c.title)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0">
          <div aria-live="polite" className="sr-only">
            {q ? f(t.support.results, { n: found }) : ""}
          </div>

          {categories.length === 0 ? (
            <p className="rounded-[22px] bg-sky-50 p-8 text-center text-lg text-muted-foreground ring-1 ring-hairline">
              {f(t.support.noResults)}
            </p>
          ) : (
            <div className="grid gap-12">
              {categories.map((c) => {
                const CatIcon = CATEGORY_ICON[c.id] ?? Lifebuoy;
                return (
                  <section key={c.id} id={`topic-${c.id}`} aria-labelledby={`topic-${c.id}-title`}>
                    <h2 id={`topic-${c.id}-title`} className="flex items-center gap-3 text-2xl font-semibold text-foreground">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-primary-strong ring-1 ring-hairline">
                        <CatIcon className="h-5 w-5" weight="duotone" aria-hidden="true" />
                      </span>
                      {f(c.title)}
                    </h2>
                    <FaqAccordion items={c.items} className="mt-5" forceOpen={!!q} />
                  </section>
                );
              })}
            </div>
          )}

          {/* Still need help */}
          <Reveal className="mt-14 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#1f6fd6,#13407e)] p-8 text-white shadow-lift sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
                  <ChatCircleDots className="h-7 w-7" weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">{f(t.support.stillNeedHelp)}</h2>
                  <p className="mt-2 max-w-md text-white/85">{f(t.support.stillNeedHelpBody)}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-primary-deep transition-transform hover:-translate-y-0.5"
                >
                  <EnvelopeSimple className="h-5 w-5" weight="duotone" aria-hidden="true" />
                  {t.support.emailUs}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" weight="duotone" aria-hidden="true" />
                  {t.support.callUs}
                </a>
                <Link
                  to={path("/contact")}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-3 font-semibold text-white underline-offset-4 hover:underline"
                >
                  {t.support.contactPage}
                  <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
