import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/hooks";

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em]",
        dark ? "bg-white/12 text-white ring-1 ring-white/20" : "bg-sky-50 text-primary-strong ring-1 ring-hairline",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: {
  id?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          "mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-[2.6rem]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/80" : "text-muted-foreground",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
