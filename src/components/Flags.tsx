import { useId, type ReactNode } from "react";
import type { Lang } from "@/i18n/config";

// Small round flags for the language switcher. Decorative: the language name
// next to them is the accessible label.

function Round({ children, className }: { children: ReactNode; className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 rounded-full ring-1 ring-black/10 ${className ?? "h-[18px] w-[18px]"}`}
    >
      <defs>
        <clipPath id={id}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>{children}</g>
    </svg>
  );
}

function GB({ className }: { className?: string }) {
  return (
    <Round className={className}>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#fff" strokeWidth="4.5" />
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#C8102E" strokeWidth="2.2" />
      <path d="M12 0 V24 M0 12 H24" stroke="#fff" strokeWidth="6.5" />
      <path d="M12 0 V24 M0 12 H24" stroke="#C8102E" strokeWidth="3.8" />
    </Round>
  );
}

function ES({ className }: { className?: string }) {
  return (
    <Round className={className}>
      <rect width="24" height="24" fill="#AA151B" />
      <rect y="6" width="24" height="12" fill="#F1BF00" />
    </Round>
  );
}

function FR({ className }: { className?: string }) {
  return (
    <Round className={className}>
      <rect width="8" height="24" fill="#002654" />
      <rect x="8" width="8" height="24" fill="#fff" />
      <rect x="16" width="8" height="24" fill="#CE1126" />
    </Round>
  );
}

export const Flag: Record<Lang, (p: { className?: string }) => ReactNode> = { en: GB, es: ES, fr: FR };
