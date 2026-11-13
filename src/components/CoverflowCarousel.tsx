// Coverflow Carousel
// Adapted from "Coverflow Carousel" by educalvolpz on 21st.dev
// (https://21st.dev/community/components/educalvolpz/coverflow-carousel).
// Changes for this site: Vite/React Router instead of Next.js, LazyMotion
// with `m` components, card size and spacing expressed relative to the card
// so the prerendered HTML matches every screen size, caption + dot
// navigation, localized labels, clickable side cards and an SSR-safe
// reduced-motion check.

import { LazyMotion, m } from "motion/react";
import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { cn, useReducedMotionSafe } from "@/lib/hooks";

export interface CoverflowItem {
  id: string;
  src: string;
  srcSet?: string;
  alt: string;
  caption: string;
}

interface DragInfo {
  offset: { x: number; y: number };
  velocity: { x: number; y: number };
}

const loadFeatures = () => import("@/components/motion-features").then((mod) => mod.default);

const ROTATION = 42; // degrees
const SPACING = 62; // % of the card width between neighbouring cards
const DEPTH = 170; // px pushed back per step
const SCALE_STEP = 0.12;
const MIN_SCALE = 0.55;
const MAX_VISIBLE_OFFSET = 2;
const SWIPE_VELOCITY_THRESHOLD = 450;
const SWIPE_DISTANCE_THRESHOLD = 60;

export function CoverflowCarousel({
  items,
  loop = true,
  className,
  label,
}: {
  items: CoverflowItem[];
  loop?: boolean;
  className?: string;
  label: string;
}) {
  const { t, f } = useI18n();
  const reduced = useReducedMotionSafe();
  const [active, setActive] = useState(0);
  const total = items.length;
  const dragged = useRef(false);

  const goTo = useCallback(
    (next: number) => {
      const clamped = loop ? ((next % total) + total) % total : Math.min(Math.max(next, 0), total - 1);
      setActive(clamped);
    },
    [loop, total]
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  };

  const onDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
    const left = info.offset.x < -SWIPE_DISTANCE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY_THRESHOLD;
    const right = info.offset.x > SWIPE_DISTANCE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY_THRESHOLD;
    if (left) goTo(active + 1);
    else if (right) goTo(active - 1);
    // Ignore the click that ends a drag gesture.
    window.setTimeout(() => (dragged.current = false), 0);
  };

  // Keep the active slide's neighbours decoded so swiping never shows a blank.
  useEffect(() => {
    for (const d of [-1, 1]) {
      const item = items[(((active + d) % total) + total) % total];
      const img = new Image();
      img.src = item.src;
    }
  }, [active, items, total]);

  /** Signed distance from the active card, wrapping around when looping. */
  const offsetOf = (i: number) => {
    let o = i - active;
    if (loop) {
      if (o > total / 2) o -= total;
      if (o < -total / 2) o += total;
    }
    return o;
  };

  const current = items[active];

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className={cn("relative w-full", className)}>
        <div
          aria-label={label}
          aria-roledescription="carousel"
          className="relative w-full select-none rounded-3xl outline-none"
          onKeyDown={onKeyDown}
          role="region"
          // The region takes focus so ArrowLeft / ArrowRight move between
          // slides, in addition to the buttons below.
          tabIndex={0}
        >
          <m.div
            className="relative mx-auto flex aspect-[2.25/1] w-[min(84vw,720px)] touch-pan-y items-center justify-center"
            drag={total > 1 && !reduced ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragStart={() => (dragged.current = true)}
            onDragEnd={onDragEnd}
            style={{ perspective: reduced ? undefined : 1400, transformStyle: "preserve-3d" }}
          >
            {items.map((item, i) => {
              const offset = offsetOf(i);
              const distance = Math.abs(offset);
              const visible = distance <= MAX_VISIBLE_OFFSET;
              const isActive = offset === 0;

              return (
                <m.div
                  key={item.id}
                  aria-hidden={!isActive}
                  initial={false}
                  animate={
                    reduced
                      ? { opacity: isActive ? 1 : 0, x: "0%", rotateY: 0, scale: 1, z: 0 }
                      : {
                          opacity: visible ? (distance === 2 ? 0.55 : 1) : 0,
                          rotateY: -offset * ROTATION,
                          scale: Math.max(1 - distance * SCALE_STEP, MIN_SCALE),
                          x: `${offset * SPACING}%`,
                          z: -distance * DEPTH,
                        }
                  }
                  transition={reduced ? { duration: 0 } : { type: "spring", bounce: 0.14, duration: 0.6 }}
                  onClick={() => {
                    if (!dragged.current && !isActive) goTo(i);
                  }}
                  className={cn(
                    "absolute inset-0 overflow-hidden rounded-[22px] bg-white ring-[6px] ring-white sm:rounded-[28px] sm:ring-8",
                    isActive
                      ? "shadow-[0_30px_60px_-28px_rgb(19_64_126/0.55)]"
                      : "cursor-pointer shadow-[0_18px_40px_-26px_rgb(19_64_126/0.5)]",
                    !visible && "pointer-events-none"
                  )}
                  style={{ transformStyle: "preserve-3d", zIndex: total - distance }}
                >
                  <img
                    src={item.src}
                    srcSet={item.srcSet}
                    sizes="(min-width: 860px) 720px, 84vw"
                    width={1600}
                    height={711}
                    alt={item.alt}
                    draggable={false}
                    loading={distance <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </m.div>
              );
            })}
          </m.div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5">
          <p className="min-h-[1.75em] text-center font-display text-xl font-medium text-foreground sm:text-2xl" aria-hidden="true">
            {current.caption}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label={t.common.previous}
              disabled={!loop && active === 0}
              onClick={() => goTo(active - 1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-foreground shadow-card ring-1 ring-hairline transition-all hover:-translate-y-0.5 hover:text-primary-strong disabled:opacity-40"
            >
              <CaretLeft className="h-5 w-5" weight="bold" aria-hidden="true" />
            </button>

            <ul className="flex items-center gap-1.5">
              {items.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-label={f(t.common.goToSlide, { n: i + 1 })}
                    aria-current={i === active ? "true" : undefined}
                    onClick={() => goTo(i)}
                    className="grid h-6 w-6 place-items-center"
                  >
                    <span
                      className={cn(
                        "block h-2.5 rounded-full transition-all duration-300",
                        i === active ? "w-7 bg-primary-strong" : "w-2.5 bg-[#c9dcf2] hover:bg-primary"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={t.common.next}
              disabled={!loop && active === total - 1}
              onClick={() => goTo(active + 1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-foreground shadow-card ring-1 ring-hairline transition-all hover:-translate-y-0.5 hover:text-primary-strong disabled:opacity-40"
            >
              <CaretRight className="h-5 w-5" weight="bold" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div aria-live="polite" className="sr-only">
          {f(t.common.slideStatus, { current: active + 1, total, caption: current.caption })}
        </div>
      </div>
    </LazyMotion>
  );
}
