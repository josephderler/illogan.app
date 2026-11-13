import { Link } from "react-router";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/hooks";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  const { path, t } = useI18n();
  return (
    <Link
      to={path("/")}
      className={cn("group inline-flex items-center gap-2.5 rounded-xl", className)}
      aria-label={`${site.brand}, ${t.common.breadcrumbHome}`}
    >
      <img
        src="/img/app-icon-128.webp"
        width={128}
        height={128}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 rounded-[12px] shadow-[0_6px_16px_-8px_rgb(19_64_126/0.6)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[22px] font-semibold tracking-tight",
            light ? "text-white" : "text-foreground"
          )}
        >
          {site.brand}
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em]",
            light ? "text-white/70" : "text-primary-strong"
          )}
        >
          {t.app.tagline}
        </span>
      </span>
    </Link>
  );
}
