import { useState } from "react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { Rich } from "@/components/Rich";
import { SectionHeading } from "@/components/SectionHeading";
import { NumberBall } from "@/components/NumberBall";
import { Clock, Play, YoutubeLogo } from "@/components/icons";

// Click-to-play YouTube embed. The poster is served from this site, so nothing
// is requested from YouTube (and no cookies are set) until the visitor presses
// play. The player then loads from youtube-nocookie.com.

export function VideoSection() {
  const { t, f } = useI18n();
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      aria-labelledby="video-title"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#102f5e_0%,#13407e_45%,#1a5bb8_100%)] py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgb(255 255 255 / 0.16) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-berry/25 blur-3xl" aria-hidden="true" />

      <div className="container-page relative">
        <SectionHeading
          id="video-title"
          dark
          eyebrow={t.video.eyebrow}
          title={f(t.video.title)}
          subtitle={f(t.video.subtitle)}
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="relative">
          <NumberBall n={4} color="sun" className="absolute -left-4 -top-6 z-10 hidden w-16 text-3xl sm:inline-grid lg:-left-10" />
          <NumberBall n={7} color="mint" className="absolute -bottom-6 -right-3 z-10 hidden w-14 text-2xl sm:inline-grid lg:-right-8" />

          <div className="overflow-hidden rounded-[28px] bg-black shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-[6px] ring-white/15 sm:rounded-[36px]">
            <div className="relative aspect-video w-full">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${site.youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  title={f(t.video.iframeTitle)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                  aria-label={`${t.video.play}: ${f(t.video.iframeTitle)} (${site.videoDurationLabel})`}
                >
                  <img
                    src="/img/video-poster.webp"
                    srcSet="/img/video-poster-640.webp 640w, /img/video-poster.webp 1280w"
                    sizes="(min-width: 960px) 896px, 92vw"
                    width={1280}
                    height={720}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(19_64_126/0.15)_0%,rgb(19_64_126/0.45)_100%)] transition-opacity group-hover:opacity-70" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 rounded-full bg-white/60 motion-safe:animate-pulse-ring" aria-hidden="true" />
                    <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-berry shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                      <Play className="ml-1 h-9 w-9 sm:h-10 sm:w-10" weight="fill" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur sm:bottom-6 sm:left-6">
                    <Clock className="h-4 w-4" weight="bold" aria-hidden="true" />
                    {site.videoDurationLabel}
                  </span>
                </button>
              )}
            </div>
          </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm text-white/90 sm:flex-row">
            <p className="link-inline max-w-xl text-center sm:text-left [&_a]:text-white [&_a:hover]:text-white/80">
              <Rich text={t.video.consent} />
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${site.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
            >
              <YoutubeLogo className="h-5 w-5" weight="fill" aria-hidden="true" />
              {t.video.watchOnYoutube}
              <span className="sr-only"> ({t.common.newTab})</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
