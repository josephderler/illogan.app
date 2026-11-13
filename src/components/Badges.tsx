import { site } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/hooks";
import { GooglePlayLogo, Star } from "@/components/icons";

/** Official, localized "Get it on Google Play" badge. */
export function GooglePlayBadge({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const { lang, t } = useI18n();
  const [w, h] = lang === "en" ? [564, 168] : [646, 192];
  const height = size === "sm" ? "h-11" : size === "lg" ? "h-[60px] sm:h-16" : "h-14";
  return (
    <a
      href={site.playUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block rounded-[12px] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        className
      )}
    >
      <img
        src={`/img/badges/google-play-${lang}.webp`}
        width={w}
        height={h}
        alt={t.common.getItOnGooglePlay}
        className={cn(height, "w-auto")}
        loading="lazy"
        decoding="async"
      />
      <span className="sr-only"> ({t.common.newTab})</span>
    </a>
  );
}

/** Compact text button that also links to the Google Play listing. */
export function PlayButton({ className, label }: { className?: string; label?: string }) {
  const { t } = useI18n();
  return (
    <a
      href={site.playUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-primary-strong px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-12px_rgb(31_111_214/0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-deep",
        className
      )}
    >
      <GooglePlayLogo className="h-[18px] w-[18px]" weight="fill" aria-hidden="true" />
      {label ?? t.nav.getApp}
      <span className="sr-only"> ({t.common.newTab})</span>
    </a>
  );
}

/** The Teacher Approved medal supplied with the brand assets. */
export function TeacherMedal({ className, size = 64 }: { className?: string; size?: 64 | 400 }) {
  const { t } = useI18n();
  return (
    <img
      src={`/img/teacher-approved-${size}.webp`}
      width={size}
      height={size}
      alt={t.teacher.badgeAlt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

/** Pill: medal + "Teacher Approved". */
export function TeacherChip({ className, label }: { className?: string; label?: string }) {
  const { t } = useI18n();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-primary-deep shadow-card ring-1 ring-hairline backdrop-blur",
        className
      )}
    >
      <img
        src="/img/teacher-approved-64.webp"
        width={64}
        height={64}
        alt=""
        aria-hidden="true"
        className="h-7 w-7 rounded-full bg-sky-50 p-0.5"
      />
      {label ?? t.common.teacherApproved}
    </span>
  );
}

/** Five stars with a partial fill, e.g. 4.5. */
export function Stars({ value, className }: { value: number; className?: string }) {
  const { t, f } = useI18n();
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} role="img" aria-label={f(t.common.ratingAria)}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block h-[18px] w-[18px]" aria-hidden="true">
            <Star className="absolute inset-0 h-full w-full text-[#e3e8ef]" weight="fill" />
            {fill > 0 && (
              <Star
                className="absolute inset-0 h-full w-full text-sun-deep"
                weight="fill"
                style={fill < 1 ? { clipPath: `inset(0 ${100 - fill * 100}% 0 0)` } : undefined}
              />
            )}
          </span>
        );
      })}
    </span>
  );
}
