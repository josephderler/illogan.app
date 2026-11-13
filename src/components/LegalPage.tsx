import { Link } from "react-router";
import { site } from "@/data/site";
import type { LegalDoc } from "@/i18n/types";
import { useI18n } from "@/i18n/I18nProvider";
import { PageHeader } from "@/components/PageHeader";
import { Rich } from "@/components/Rich";
import {
  CalendarBlank,
  CaretDown,
  Cookie,
  EnvelopeSimple,
  FileText,
  Lifebuoy,
  ShieldCheck,
  type Icon,
} from "@/components/icons";
import type { PageKey } from "@/routes";
import { useDocumentHead } from "@/seo/useDocumentHead";

const ICON: Record<"privacy" | "terms" | "cookies", Icon> = {
  privacy: ShieldCheck,
  terms: FileText,
  cookies: Cookie,
};

export function LegalPage({ doc, page }: { doc: LegalDoc; page: "privacy" | "terms" | "cookies" }) {
  const { t, f, path, date, lang } = useI18n();
  useDocumentHead(page);

  const related: { key: PageKey; to: string; label: string; Icon: Icon }[] = (
    [
      { key: "privacy", to: "/privacy", label: t.legal.privacy.title, Icon: ShieldCheck },
      { key: "terms", to: "/terms", label: t.legal.terms.title, Icon: FileText },
      { key: "cookies", to: "/cookies", label: t.legal.cookies.title, Icon: Cookie },
      { key: "support", to: "/support", label: t.footer.helpCentre, Icon: Lifebuoy },
    ] as const
  ).filter((r) => r.key !== page);

  const toc = (
    <ol className="grid gap-1">
      {doc.sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex gap-3 rounded-xl px-3 py-2 text-[15px] text-muted-foreground transition-colors hover:bg-sky-50 hover:text-foreground"
          >
            <span className="w-5 shrink-0 text-right font-semibold text-primary-strong">{i + 1}</span>
            {f(s.title)}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <PageHeader icon={ICON[page]} eyebrow={t.footer.legal} title={f(doc.title)} crumb={f(doc.title)}>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-card ring-1 ring-hairline">
          <CalendarBlank className="h-4 w-4 text-primary-strong" weight="duotone" aria-hidden="true" />
          {t.common.lastUpdated}
          {lang === "fr" ? "\u00A0: " : ": "}
          <time dateTime={site.legalUpdated}>{date(site.legalUpdated)}</time>
        </p>
      </PageHeader>

      <div className="container-page grid gap-10 pb-24 pt-4 lg:grid-cols-[280px_1fr] lg:gap-14">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <details className="acc group rounded-[22px] bg-white shadow-card ring-1 ring-hairline lg:hidden">
            <summary className="flex items-center justify-between px-5 py-4 font-display text-lg font-medium text-foreground">
              {t.common.onThisPage}
              <CaretDown className="h-4 w-4 transition-transform group-open:rotate-180" weight="bold" aria-hidden="true" />
            </summary>
            <nav aria-label={t.common.onThisPage} className="px-2 pb-3">
              {toc}
            </nav>
          </details>
          <nav aria-label={t.common.onThisPage} className="hidden rounded-[22px] bg-white p-3 shadow-card ring-1 ring-hairline lg:block">
            <p className="px-3 pb-2 pt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {t.common.onThisPage}
            </p>
            {toc}
          </nav>
        </aside>

        <article className="min-w-0">
          <p className="link-inline rounded-[22px] bg-sky-50 p-6 text-lg leading-relaxed text-foreground ring-1 ring-hairline sm:p-7">
            <Rich text={doc.summary} />
          </p>

          <div className="prose-legal mt-10 grid gap-10">
            {doc.sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`} className="flex items-baseline gap-3 text-2xl font-semibold text-foreground sm:text-[1.7rem]">
                  <span className="font-display text-primary-strong">{i + 1}.</span>
                  {f(s.title)}
                </h2>
                <div className="mt-4">
                  {s.blocks.map((b, j) =>
                    typeof b === "string" ? (
                      <p key={j}>
                        <Rich text={b} />
                      </p>
                    ) : (
                      <ul key={j}>
                        {b.list.map((li, k) => (
                          <li key={k}>
                            <Rich text={li} />
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Questions + related pages */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="rounded-[26px] bg-[linear-gradient(135deg,#1f6fd6,#13407e)] p-7 text-white shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <EnvelopeSimple className="h-6 w-6" weight="duotone" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{f(t.legal.contactTitle)}</h2>
              <p className="link-inline mt-2 text-white/85 [&_a]:text-white">
                <Rich text={t.legal.contactBody} />
              </p>
            </div>
            <nav aria-label={t.legal.related} className="rounded-[26px] bg-white p-7 shadow-card ring-1 ring-hairline">
              <h2 className="text-xl font-semibold text-foreground">{t.legal.related}</h2>
              <ul className="mt-4 grid gap-2">
                {related.map((r) => (
                  <li key={r.key}>
                    <Link
                      to={path(r.to)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-semibold text-foreground transition-colors hover:bg-sky-50 hover:text-primary-strong"
                    >
                      <r.Icon className="h-5 w-5 text-primary-strong" weight="duotone" aria-hidden="true" />
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>
      </div>
    </>
  );
}
