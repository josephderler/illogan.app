import { shotSrc, type ShotKey } from "@/data/shots";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  BookOpenText,
  Cards,
  HandPalm,
  ListNumbers,
  LockSimple,
  MusicNotes,
  PencilSimpleLine,
  Scales,
  SlidersHorizontal,
  type Icon,
} from "@/components/icons";
import { cn } from "@/lib/hooks";

type Card = {
  Icon: Icon;
  anim: string;
  tint: string;
  shot?: ShotKey;
  layout: string;
};

// Bento layout: 3 columns on large screens, 2 on tablets, 1 on phones.
const CARDS: Card[] = [
  { Icon: HandPalm, anim: "icon-anim-wiggle", tint: "bg-sun/25 text-[#b77400]", shot: "bees", layout: "md:col-span-2" },
  { Icon: PencilSimpleLine, anim: "icon-anim-tilt", tint: "bg-mint/25 text-[#11806f]", shot: "write", layout: "lg:row-span-2" },
  { Icon: ListNumbers, anim: "icon-anim-bounce", tint: "bg-coral/20 text-[#c2381c]", layout: "" },
  { Icon: Scales, anim: "icon-anim-swing", tint: "bg-grape/20 text-[#6a3fc4]", layout: "" },
  { Icon: BookOpenText, anim: "icon-anim-pop", tint: "bg-leaf/20 text-[#13873a]", shot: "vocab", layout: "md:col-span-2" },
  { Icon: Cards, anim: "icon-anim-beat", tint: "bg-berry/15 text-[#c21f63]", layout: "" },
];

export function Features() {
  const { t, f, lang } = useI18n();

  return (
    <section id="features" aria-labelledby="features-title" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="features-title"
          eyebrow={t.features.eyebrow}
          title={f(t.features.title)}
          subtitle={f(t.features.subtitle)}
        />

        <div className="mt-14 grid grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => {
            const item = t.features.items[i];
            const img = card.shot ? shotSrc(card.shot, lang) : null;
            const tall = card.layout.includes("row-span");
            const wide = card.layout.includes("col-span-2");
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className={cn(
                  "group relative flex overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-hairline transition-transform duration-300 hover:-translate-y-1",
                  wide ? "flex-col sm:flex-row" : "flex-col",
                  card.layout
                )}
              >
                <div className={cn("relative z-10 p-7 sm:p-8", wide && img && "sm:w-[46%] sm:pr-2")}>
                  <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", card.tint)}>
                    <card.Icon className={cn("h-7 w-7", card.anim)} weight="duotone" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{f(item.title)}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{f(item.body)}</p>
                </div>
                {img && (
                  <div
                    className={cn(
                      "relative",
                      wide ? "px-7 pb-7 sm:flex-1 sm:py-7 sm:pl-2 sm:pr-7" : "mt-auto px-7 pb-7",
                      tall && "lg:flex lg:flex-1 lg:items-end"
                    )}
                  >
                    <img
                      src={img.src}
                      srcSet={img.srcSet}
                      sizes={wide ? "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 90vw" : "(min-width: 1024px) 360px, 90vw"}
                      width={1600}
                      height={711}
                      alt={f(t.gallery.alt, { caption: t.gallery.slides[card.shot!] })}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "w-full rounded-2xl object-cover ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.02]",
                        tall ? "aspect-[2.25/1] lg:aspect-[6/5]" : "aspect-[2.25/1]"
                      )}
                    />
                  </div>
                )}
              </Reveal>
            );
          })}

          {/* Settings band */}
          <Reveal className="group relative overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#13407e_0%,#1a5bb8_55%,#1f6fd6_100%)] p-7 text-white shadow-card sm:p-9 md:col-span-2 lg:col-span-3">
            <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 right-40 h-44 w-44 rounded-full bg-sun/20" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                  <SlidersHorizontal className="icon-anim-swing h-7 w-7" weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{f(t.features.settingsTitle)}</h3>
                  <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-white/95">{f(t.features.settingsBody)}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {t.features.settingsChips.map((chip, i) => {
                  const ChipIcon = [BookOpenText, MusicNotes, LockSimple][i] ?? BookOpenText;
                  return (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep shadow-[0_8px_20px_-12px_rgb(0_0_0/0.4)]"
                    >
                      <ChipIcon className="h-[18px] w-[18px] text-primary-strong" weight="duotone" aria-hidden="true" />
                      {chip}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
