import type { FaqItem } from "@/i18n/types";
import { useI18n } from "@/i18n/I18nProvider";
import { Rich } from "@/components/Rich";
import { Plus } from "@/components/icons";
import { cn } from "@/lib/hooks";

// Native <details> keeps the answers readable without JavaScript and in the
// static HTML; browsers that support ::details-content animate the height.

export function FaqAccordion({
  items,
  className,
  defaultOpen,
  forceOpen = false,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpen?: string;
  forceOpen?: boolean;
}) {
  const { f } = useI18n();
  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((item) => (
        <details
          key={item.id}
          id={`faq-${item.id}`}
          className="acc group rounded-[22px] bg-white shadow-card ring-1 ring-hairline transition-shadow open:shadow-lift"
          open={forceOpen || item.id === defaultOpen || undefined}
        >
          <summary className="flex items-center gap-4 rounded-[22px] px-6 py-5 text-left sm:px-7">
            <h3 className="flex-1 font-display text-lg font-medium leading-snug text-foreground sm:text-xl">
              {f(item.q)}
            </h3>
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-50 text-primary-strong transition-transform duration-300 group-open:rotate-45 group-open:bg-primary-strong group-open:text-white"
              aria-hidden="true"
            >
              <Plus className="h-4 w-4" weight="bold" />
            </span>
          </summary>
          <div className="link-inline px-6 pb-6 text-[16px] leading-relaxed text-muted-foreground sm:px-7">
            <p>
              <Rich text={item.a} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
