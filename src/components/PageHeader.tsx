import type { ReactNode } from "react";
import { Link } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { CaretRight, House, type Icon } from "@/components/icons";
import { NumberBall } from "@/components/NumberBall";

/** Title band used at the top of every page except the home page. */
export function PageHeader({
  icon: IconCmp,
  eyebrow,
  title,
  intro,
  crumb,
  children,
}: {
  icon: Icon;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  crumb: string;
  children?: ReactNode;
}) {
  const { t, path } = useI18n();
  return (
    <header className="relative overflow-hidden bg-[linear-gradient(180deg,#eaf5ff_0%,#f6fbff_70%,#ffffff_100%)] pb-14 pt-8 sm:pb-16 sm:pt-10">
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <NumberBall n={1} color="sun" className="absolute right-[9%] top-12 hidden w-14 text-2xl lg:inline-grid" />
      <NumberBall n={2} color="berry" className="absolute right-[18%] top-36 hidden w-10 text-lg lg:inline-grid" />
      <NumberBall n={3} color="leaf" className="absolute right-[5%] top-44 hidden w-12 text-xl lg:inline-grid" />

      <div className="container-page relative">
        <nav aria-label={t.common.breadcrumb}>
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link to={path("/")} className="inline-flex items-center gap-1.5 rounded-full px-1 hover:text-primary-strong">
                <House className="h-4 w-4" weight="duotone" aria-hidden="true" />
                {t.common.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">
              <CaretRight className="h-3.5 w-3.5" weight="bold" />
            </li>
            <li aria-current="page" className="font-semibold text-foreground">
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 flex items-start gap-5">
          <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-primary-strong shadow-card ring-1 ring-hairline sm:grid">
            <IconCmp className="h-8 w-8" weight="duotone" aria-hidden="true" />
          </span>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-strong">{eyebrow}</p>
            <h1 className="mt-2 text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">{title}</h1>
            {intro && <div className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</div>}
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
