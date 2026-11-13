import { useI18n } from "@/i18n/I18nProvider";
import { GooglePlayBadge, TeacherChip } from "@/components/Badges";
import { NumberBall } from "@/components/NumberBall";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  const { t, f } = useI18n();
  return (
    <section aria-labelledby="cta-title" className="pb-24 sm:pb-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(125deg,#102f5e_0%,#13407e_45%,#1a5bb8_100%)] px-7 py-14 text-center text-white shadow-lift sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(rgb(255 255 255 / 0.16) 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
            }}
          />
          <NumberBall n={1} color="sun" className="absolute left-[6%] top-10 hidden w-16 text-3xl md:inline-grid" />
          <NumberBall n={2} color="berry" className="absolute bottom-10 left-[12%] hidden w-12 text-xl md:inline-grid" />
          <NumberBall n={3} color="leaf" className="absolute right-[8%] top-12 hidden w-14 text-2xl md:inline-grid" />
          <NumberBall n={9} color="coral" className="absolute bottom-12 right-[14%] hidden w-12 text-xl md:inline-grid" />

          <div className="relative mx-auto max-w-2xl">
            <img
              src="/img/app-icon-256.webp"
              width={256}
              height={256}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="mx-auto h-24 w-24 rounded-[26px] shadow-[0_20px_40px_-18px_rgb(0_0_0/0.55)] ring-4 ring-white/25"
            />
            <h2 id="cta-title" className="mt-7 text-[2.1rem] font-semibold leading-tight sm:text-5xl">
              {f(t.cta.title)}
            </h2>
            <p className="mt-4 text-lg text-white/95">{f(t.cta.subtitle)}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GooglePlayBadge size="lg" />
              <TeacherChip className="bg-white! text-primary-deep" />
            </div>
            <p className="mt-6 text-sm text-white/90">{f(t.cta.note)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
