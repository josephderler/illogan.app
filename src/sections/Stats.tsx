import { site } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { BookOpenText, DownloadSimple, PuzzlePiece, Star, type Icon } from "@/components/icons";

export function Stats() {
  const { t, f, rating } = useI18n();

  const stats: { value: string; label: string; Icon: Icon; tint: string }[] = [
    { value: site.downloads, label: t.stats.downloads, Icon: DownloadSimple, tint: "bg-primary/15 text-primary-strong" },
    { value: rating, label: f(t.stats.rating), Icon: Star, tint: "bg-sun/25 text-[#b77400]" },
    { value: String(site.games), label: t.stats.games, Icon: PuzzlePiece, tint: "bg-berry/15 text-[#c21f63]" },
    { value: `${site.words}+`, label: t.stats.words, Icon: BookOpenText, tint: "bg-leaf/15 text-[#13873a]" },
  ];

  return (
    <section aria-label={t.stats.label} className="relative z-10 -mt-6">
      <div className="container-page">
        <Reveal as="ul" className="grid grid-cols-2 gap-3 rounded-[28px] bg-white p-3 shadow-card ring-1 ring-hairline sm:gap-4 sm:p-4 lg:grid-cols-4">
          {stats.map(({ value, label, Icon, tint }) => (
            <li key={label} className="group flex flex-col items-start gap-3 rounded-[20px] bg-sky-50/70 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tint}`}>
                <Icon className="icon-anim-pop h-6 w-6" weight="duotone" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[1.75rem] font-semibold leading-none text-foreground sm:text-3xl">
                  {value}
                </span>
                <span className="mt-1.5 block text-[13px] leading-snug text-muted-foreground sm:text-sm">{label}</span>
              </span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
