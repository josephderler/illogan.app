import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { stripLang } from "@/i18n/config";
import { Logo } from "@/components/Logo";
import { LanguageMenu, LanguagePills } from "@/components/LanguageSwitcher";
import { GooglePlayBadge, PlayButton, TeacherChip } from "@/components/Badges";
import { List, X } from "@/components/icons";
import { cn, useScrolledPast } from "@/lib/hooks";

export function Header() {
  const { t, path } = useI18n();
  const { pathname, hash } = useLocation();
  const scrolled = useScrolledPast(8);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  const page = stripLang(pathname);

  const links = [
    { to: "/#features", label: t.nav.features, desktop: true },
    { to: "/#video", label: t.nav.video, desktop: false },
    { to: "/#screenshots", label: t.nav.screenshots, desktop: true },
    { to: "/#parents", label: t.nav.parents, desktop: true },
    { to: "/#faq", label: t.nav.faq, desktop: true },
    { to: "/support", label: t.nav.support, desktop: true },
    { to: "/contact", label: t.nav.contact, desktop: true },
  ];

  const isActive = (to: string) =>
    to.startsWith("/#") ? page === "/" && hash === to.slice(1) : page === to;

  // Close the mobile menu on navigation and with Escape; lock page scroll.
  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || open
          ? "border-b border-hairline bg-white/90 shadow-[0_8px_30px_-22px_rgb(19_64_126/0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      )}
    >
      <div className="container-page flex h-[72px] items-center gap-4">
        <Logo />

        <nav aria-label={t.common.mainNav} className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {links
              .filter((l) => l.desktop)
              .map((l) => (
                <li key={l.to}>
                  <Link
                    to={path(l.to)}
                    aria-current={isActive(l.to) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-2.5 py-2 text-[15px] font-medium transition-colors xl:px-3.5",
                      isActive(l.to)
                        ? "bg-sky-50 text-primary-deep"
                        : "text-muted-foreground hover:bg-sky-50 hover:text-foreground"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <LanguageMenu className="hidden sm:block" />
          <span className="hidden md:block">
            <PlayButton />
          </span>
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-foreground ring-1 ring-hairline transition-colors hover:bg-sky-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" weight="bold" aria-hidden="true" />
            ) : (
              <List className="h-5 w-5" weight="bold" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-hairline bg-white lg:hidden"
      >
        <nav aria-label={t.common.mainNav} className="container-page py-5">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={path(l.to)}
                  aria-current={isActive(l.to) ? "page" : undefined}
                  className="flex items-center rounded-2xl px-4 py-3.5 font-display text-lg font-medium text-foreground transition-colors hover:bg-sky-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-hairline pt-5">
            <LanguagePills />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <GooglePlayBadge />
            <TeacherChip />
          </div>
        </nav>
      </div>
    </header>
  );
}
