import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { LANGS, LANG_META, switchLangPath, type Lang } from "@/i18n/config";
import { loadDict } from "@/i18n/load";
import { useI18n } from "@/i18n/I18nProvider";
import { Flag } from "@/components/Flags";
import { CaretDown, Check } from "@/components/icons";
import { cn } from "@/lib/hooks";

/** Navigate to the same page in another language, loading its copy first. */
function useSwitchLang() {
  const navigate = useNavigate();
  const location = useLocation();
  return (target: Lang) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const href = switchLangPath(location.pathname, location.hash, target);
    // keepScroll: stay at the same place on the page after switching.
    void loadDict(target).then(() => navigate(href, { state: { keepScroll: true } }));
  };
}

const preload = (l: Lang) => () => void loadDict(l);

/** Header dropdown. */
export function LanguageMenu({ className }: { className?: string }) {
  const { lang, t } = useI18n();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const switchTo = useSwitchLang();
  const CurrentFlag = Flag[lang];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div ref={wrap} className={cn("relative", className)}>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.common.chooseLanguage}: ${LANG_META[lang].label}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-foreground ring-1 ring-hairline transition-colors hover:bg-sky-50"
      >
        <CurrentFlag />
        <span>{LANG_META[lang].short}</span>
        <CaretDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          weight="bold"
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        hidden={!open}
        className="absolute right-0 top-[calc(100%+8px)] z-50 w-48 overflow-hidden rounded-2xl bg-white p-1.5 shadow-lift ring-1 ring-hairline"
      >
        <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {t.common.language}
        </p>
        <ul>
          {LANGS.map((l) => {
            const F = Flag[l];
            const active = l === lang;
            return (
              <li key={l}>
                <a
                  href={switchLangPath(pathname, "", l)}
                  hrefLang={LANG_META[l].htmlLang}
                  lang={LANG_META[l].htmlLang}
                  aria-current={active ? "true" : undefined}
                  onClick={switchTo(l)}
                  onPointerEnter={preload(l)}
                  onFocus={preload(l)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
                    active ? "bg-sky-50 text-primary-deep" : "text-foreground hover:bg-sky-50"
                  )}
                >
                  <F className="h-5 w-5" />
                  <span className="flex-1">{LANG_META[l].label}</span>
                  {active && <Check className="h-4 w-4 text-primary-strong" weight="bold" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/** Inline pills, used in the mobile menu and the footer. */
export function LanguagePills({ className, dark = false }: { className?: string; dark?: boolean }) {
  const { lang, t } = useI18n();
  const { pathname } = useLocation();
  const switchTo = useSwitchLang();
  return (
    <nav aria-label={t.common.language} className={className}>
      <ul className="flex flex-wrap gap-2">
        {LANGS.map((l) => {
          const F = Flag[l];
          const active = l === lang;
          return (
            <li key={l}>
              <a
                href={switchLangPath(pathname, "", l)}
                hrefLang={LANG_META[l].htmlLang}
                lang={LANG_META[l].htmlLang}
                aria-current={active ? "true" : undefined}
                onClick={switchTo(l)}
                onPointerEnter={preload(l)}
                onFocus={preload(l)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  dark
                    ? active
                      ? "bg-white text-primary-deep"
                      : "bg-white/10 text-white hover:bg-white/20"
                    : active
                      ? "bg-primary-strong text-white"
                      : "bg-sky-50 text-foreground hover:bg-sky-100"
                )}
              >
                <F />
                {LANG_META[l].label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
