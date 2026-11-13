import { Link } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { FaqAccordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Lifebuoy } from "@/components/icons";

export function FaqSection() {
  const { t, f, path } = useI18n();
  const all = t.faq.categories.flatMap((c) => c.items);
  const items = t.faq.home.map((id) => all.find((q) => q.id === id)!).filter(Boolean);

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow={t.faq.eyebrow}
            title={f(t.faq.title)}
            subtitle={f(t.faq.subtitle)}
          />
          <Reveal className="mt-8">
            <Link
              to={path("/support")}
              className="group inline-flex items-center gap-3 rounded-full bg-primary-strong py-2 pl-2 pr-6 font-semibold text-white shadow-[0_14px_30px_-14px_rgb(31_111_214/0.8)] transition-all hover:-translate-y-0.5 hover:bg-primary-deep"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                <Lifebuoy className="h-5 w-5" weight="duotone" aria-hidden="true" />
              </span>
              {t.faq.more}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <FaqAccordion items={items} defaultOpen={items[0]?.id} />
        </Reveal>
      </div>
    </section>
  );
}
