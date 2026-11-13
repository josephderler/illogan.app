import { Link } from "react-router";
import { site, addressLine } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { Logo } from "@/components/Logo";
import { GooglePlayBadge, TeacherMedal } from "@/components/Badges";
import { LanguagePills } from "@/components/LanguageSwitcher";
import { EnvelopeSimple, MapPin, Phone } from "@/components/icons";

export function Footer() {
  const { t, f, path } = useI18n();

  const columns = [
    {
      title: t.footer.app,
      links: [
        { to: "/#features", label: t.nav.features },
        { to: "/#video", label: t.nav.video },
        { to: "/#screenshots", label: t.nav.screenshots },
        { to: "/#teacher-approved", label: t.footer.teacherApproved },
      ],
    },
    {
      title: t.footer.help,
      links: [
        { to: "/support", label: t.footer.helpCentre },
        { to: "/#faq", label: t.nav.faq },
        { to: "/#parents", label: t.nav.parents },
        { to: "/contact", label: t.footer.contactUs },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { to: "/privacy", label: t.legal.privacy.title },
        { to: "/terms", label: t.legal.terms.title },
        { to: "/cookies", label: t.legal.cookies.title },
        { to: "/privacy#children", label: t.footer.childrensPrivacy },
      ],
    },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0f2f5c] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgb(255 255 255 / 0.14) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />

      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/75">{f(t.footer.tagline)}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <GooglePlayBadge size="sm" />
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold ring-1 ring-white/15">
                <TeacherMedal className="h-7 w-7 rounded-full bg-white p-0.5" />
                {t.common.teacherApproved}
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1.35fr] md:gap-8">
            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <h2 className="font-display text-base font-semibold text-white">{c.title}</h2>
                <ul className="mt-4 grid gap-2.5">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={path(l.to)}
                        className="text-[15px] text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="font-display text-base font-semibold text-white">{t.footer.contact}</h2>
              <address className="mt-4 grid gap-3 text-[15px] not-italic text-white/70">
                <a href={`mailto:${site.email}`} className="flex items-start gap-2.5 transition-colors hover:text-white">
                  <EnvelopeSimple className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" weight="duotone" aria-hidden="true" />
                  {site.email}
                </a>
                <a href={`tel:${site.phoneHref}`} className="flex items-start gap-2.5 whitespace-nowrap transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" weight="duotone" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <span className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" weight="duotone" aria-hidden="true" />
                  <span>
                    {addressLine.split(", ").map((part, i, arr) => (
                      <span key={part}>
                        {part}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-sm text-white/60">
            <p>{f(t.footer.rights)}</p>
          </div>
          <LanguagePills dark />
        </div>
      </div>
    </footer>
  );
}
