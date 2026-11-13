import { GALLERY_ORDER, shotSrc } from "@/data/shots";
import { useI18n } from "@/i18n/I18nProvider";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Gallery() {
  const { t, f, lang } = useI18n();
  const items = GALLERY_ORDER.map((key) => {
    const caption = t.gallery.slides[key];
    return {
      id: key,
      ...shotSrc(key, lang),
      caption: f(caption),
      alt: f(t.gallery.alt, { caption }),
    };
  });

  return (
    <section
      id="screenshots"
      aria-labelledby="screenshots-title"
      className="relative overflow-hidden bg-sky-50 py-24 sm:py-28"
    >
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,transparent,black_20%,black_80%,transparent)]" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          id="screenshots-title"
          eyebrow={t.gallery.eyebrow}
          title={f(t.gallery.title)}
          subtitle={f(t.gallery.subtitle)}
        />
        <Reveal className="mt-14">
          <CoverflowCarousel items={items} label={t.gallery.label} />
        </Reveal>
      </div>
    </section>
  );
}
