import { Link } from "react-router";
import { site } from "@/data/site";
import { shotSrc, type ShotKey } from "@/data/shots";
import { useI18n } from "@/i18n/I18nProvider";
import { GooglePlayBadge, Stars, TeacherChip } from "@/components/Badges";
import { NumberBall } from "@/components/NumberBall";
import { Check, DownloadSimple, Play, SpeakerHigh, Star, UsersThree } from "@/components/icons";

const HERO_SHOTS: ShotKey[] = ["bees", "write", "numbers"];

export function Hero() {
  const { t, f, lang, path, rating } = useI18n();
  const shots = HERO_SHOTS.map((k) => ({ key: k, ...shotSrc(k, lang), caption: t.gallery.slides[k] }));

  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pt-14 lg:pb-28" aria-labelledby="hero-title">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#eaf5ff_0%,#f6fbff_55%,#ffffff_100%)]" />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-berry/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[260px] w-[260px] rounded-full bg-sun/25 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <TeacherChip label={t.hero.badge} />

          <h1
            id="hero-title"
            className="mt-6 text-[2.55rem] font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-[4.1rem]"
          >
            {f(t.hero.title)}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="text-gradient">{f(t.hero.titleHighlight)}</span>
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <path
                  d="M3 14 C 60 3, 120 3, 160 10 S 260 18, 297 6"
                  fill="none"
                  stroke="#ffc83d"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
            {f(t.hero.subtitle)}
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <GooglePlayBadge size="lg" />
            <Link
              to={path("/#video")}
              className="group inline-flex h-[60px] items-center gap-3 rounded-[14px] bg-white pl-2 pr-6 font-semibold text-foreground shadow-card ring-1 ring-hairline transition-all hover:-translate-y-0.5 sm:h-16"
            >
              <span className="grid h-11 w-11 place-items-center rounded-[11px] bg-berry text-white transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                <Play className="ml-0.5 h-5 w-5" weight="fill" aria-hidden="true" />
              </span>
              {t.common.watchVideo}
            </Link>
          </div>

          {/* Social proof */}
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px] text-muted-foreground lg:justify-start">
            <li className="flex items-center gap-2">
              <Stars value={site.rating} />
              <span className="font-semibold text-foreground">{f(t.hero.rating, { rating })}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <UsersThree className="h-4 w-4 text-primary-strong" weight="bold" aria-hidden="true" />
              {f(t.hero.ratings)}
            </li>
            <li className="flex items-center gap-1.5">
              <DownloadSimple className="h-4 w-4 text-primary-strong" weight="bold" aria-hidden="true" />
              {f(t.hero.downloads)}
            </li>
          </ul>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {[t.hero.ages, f(t.hero.chipGames), t.hero.chipNoAds, t.hero.chipVoice].map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-foreground ring-1 ring-hairline"
              >
                <Check className="h-3.5 w-3.5 text-leaf" weight="bold" aria-hidden="true" />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Device */}
        <div className="relative mx-auto w-full max-w-[640px] lg:mx-0">
          {/* Floating number balls */}
          <NumberBall n={1} color="sky" className="motion-safe-float absolute -top-9 right-[34%] z-20 w-12 animate-float-slow text-xl sm:w-14 sm:text-2xl [--tilt:-8deg]" style={{ animationDelay: "-3s" }} />
          <NumberBall n={2} color="sun" className="motion-safe-float absolute -right-2 -top-6 z-20 w-14 animate-float text-2xl sm:-right-6 sm:w-[70px] sm:text-[30px] [--tilt:10deg]" />
          <NumberBall n={3} color="coral" className="motion-safe-float absolute -bottom-8 left-6 z-20 w-12 animate-float-slow text-xl sm:w-[60px] sm:text-[26px] [--tilt:6deg]" style={{ animationDelay: "-5s" }} />
          <NumberBall n={10} color="leaf" className="motion-safe-float absolute -right-3 top-[44%] z-20 w-12 animate-float text-lg sm:-right-8 sm:w-16 sm:text-2xl [--tilt:-6deg]" style={{ animationDelay: "-1.5s" }} />

          <div className="group relative rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
            {/* Phone in landscape */}
            <div className="relative rounded-[34px] bg-[#13233d] p-[10px] shadow-[0_40px_80px_-30px_rgb(19_64_126/0.6),inset_0_0_0_2px_rgb(255_255_255/0.08)] sm:rounded-[44px] sm:p-[14px]">
              <span className="absolute left-[7px] top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full bg-[#2b3b57] sm:left-[9px]" aria-hidden="true" />
              <div className="relative aspect-[2.25/1] overflow-hidden rounded-[24px] bg-sky-100 sm:rounded-[32px]">
                {shots.map((s, i) => (
                  <img
                    key={s.key}
                    src={s.src}
                    srcSet={s.srcSet}
                    sizes="(min-width: 1024px) 600px, 92vw"
                    width={1600}
                    height={711}
                    alt={i === 0 ? f(t.hero.deviceAlt, { caption: s.caption }) : ""}
                    aria-hidden={i === 0 ? undefined : true}
                    fetchPriority={i === 0 ? "high" : "low"}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding={i === 0 ? "sync" : "async"}
                    className={
                      i === 0
                        ? "absolute inset-0 h-full w-full object-cover"
                        : `xfade-layer ${i === 1 ? "xfade-b" : "xfade-c"} absolute inset-0 h-full w-full object-cover`
                    }
                  />
                ))}
              </div>
            </div>

            {/* App card */}
            <div className="absolute -bottom-10 right-4 z-10 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-lift ring-1 ring-hairline backdrop-blur sm:flex">
              <img src="/img/app-icon-128.webp" width={128} height={128} alt="" aria-hidden="true" className="h-12 w-12 rounded-[14px]" />
              <div className="leading-tight">
                <p className="font-display text-[15px] font-semibold text-foreground">{t.app.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Star className="h-3.5 w-3.5 text-sun-deep" weight="fill" aria-hidden="true" />
                  {rating} · {site.downloads}
                </p>
              </div>
            </div>

            {/* Voice guided card */}
            <div className="absolute -left-4 -top-7 z-10 hidden items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lift ring-1 ring-hairline backdrop-blur md:flex lg:-left-10">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/20 text-[#138a7a]">
                <SpeakerHigh className="h-5 w-5" weight="duotone" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">{t.hero.chipVoice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
