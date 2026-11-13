import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowUp } from "@/components/icons";
import { cn, useScrolledPast } from "@/lib/hooks";

/**
 * Scroll handling for client-side navigation: jump to the #hash target if
 * there is one, otherwise to the top. The first page load is left to the
 * browser, which already handles hashes in the static HTML.
 */
export function ScrollManager() {
  const { pathname, hash, key, state } = useLocation();
  const first = useRef(true);
  const keepScroll = !!(state as { keepScroll?: boolean } | null)?.keepScroll;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // Language switch: same page in another language, keep the position.
    if (keepScroll) return;
    if (hash) {
      // Wait a frame so a newly rendered page is in the DOM.
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ block: "start" });
          if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        } else {
          window.scrollTo({ top: 0 });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, key, keepScroll]);

  return null;
}

export function BackToTop() {
  const { t } = useI18n();
  const visible = useScrolledPast(900);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={t.common.backToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-white text-primary-strong shadow-lift ring-1 ring-hairline transition-all duration-300 hover:-translate-y-0.5",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" weight="bold" aria-hidden="true" />
    </button>
  );
}

export function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only z-50 rounded-full bg-primary-strong px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t.common.skipToContent}
    </a>
  );
}
