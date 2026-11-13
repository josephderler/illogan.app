import { Link } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { NumberBall } from "@/components/NumberBall";
import { ArrowLeft, Lifebuoy } from "@/components/icons";
import { useDocumentHead } from "@/seo/useDocumentHead";

export default function NotFound() {
  const { t, f, path } = useI18n();
  useDocumentHead("notFound");

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eaf5ff_0%,#ffffff_100%)] py-24 sm:py-32" aria-labelledby="nf-title">
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
      <div className="container-page relative text-center">
        <p className="sr-only">{t.notFound.code}</p>
        <div className="flex items-center justify-center gap-3 sm:gap-5" aria-hidden="true">
          <NumberBall n={4} color="sun" className="w-24 text-5xl sm:w-32 sm:text-7xl" style={{ transform: "rotate(-8deg)" }} />
          <NumberBall n={0} color="sky" className="w-24 text-5xl sm:w-32 sm:text-7xl" />
          <NumberBall n={4} color="berry" className="w-24 text-5xl sm:w-32 sm:text-7xl" style={{ transform: "rotate(8deg)" }} />
        </div>
        <h1 id="nf-title" className="mx-auto mt-12 max-w-2xl text-4xl font-semibold text-foreground sm:text-5xl">
          {f(t.notFound.title)}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{f(t.notFound.body)}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to={path("/")}
            className="inline-flex items-center gap-2 rounded-full bg-primary-strong px-6 py-3.5 font-semibold text-white shadow-[0_14px_30px_-14px_rgb(31_111_214/0.8)] transition-all hover:-translate-y-0.5 hover:bg-primary-deep"
          >
            <ArrowLeft className="h-5 w-5" weight="bold" aria-hidden="true" />
            {t.notFound.home}
          </Link>
          <Link
            to={path("/support")}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-foreground shadow-card ring-1 ring-hairline transition-all hover:-translate-y-0.5"
          >
            <Lifebuoy className="h-5 w-5 text-primary-strong" weight="duotone" aria-hidden="true" />
            {t.notFound.support}
          </Link>
        </div>
      </div>
    </section>
  );
}
