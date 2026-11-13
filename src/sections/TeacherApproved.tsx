import { links } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { TeacherMedal } from "@/components/Badges";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { NumberBall } from "@/components/NumberBall";
import { ArrowUpRight, Check, ChalkboardTeacher } from "@/components/icons";

export function TeacherApproved() {
  const { t, f } = useI18n();

  return (
    <section id="teacher-approved" aria-labelledby="teacher-title" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#f0f9ff_0%,#e3f0ff_50%,#fdf3ff_100%)] p-8 ring-1 ring-hairline sm:p-12 lg:p-16">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_left,black_20%,transparent_70%)]" aria-hidden="true" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Medal */}
            <Reveal className="relative mx-auto grid aspect-square w-full max-w-[360px] place-items-center">
              <span className="absolute inset-[6%] rounded-full bg-white shadow-[0_30px_70px_-30px_rgb(19_64_126/0.5)]" aria-hidden="true" />
              <span className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40" aria-hidden="true" />
              <TeacherMedal size={400} className="relative w-[72%] drop-shadow-[0_18px_24px_rgb(31_111_214/0.25)]" />
              <span className="absolute bottom-[2%] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-primary-strong px-5 py-2.5 font-display text-base font-semibold text-white shadow-lift sm:text-lg">
                <ChalkboardTeacher className="h-5 w-5" weight="duotone" aria-hidden="true" />
                {t.common.teacherApproved}
              </span>
              <NumberBall n={5} color="berry" className="absolute -right-2 top-6 w-14 text-2xl" />
              <NumberBall n={8} color="grape" className="absolute -left-1 bottom-16 w-12 text-xl" />
            </Reveal>

            {/* Copy */}
            <Reveal delay={100}>
              <Eyebrow>{t.teacher.eyebrow}</Eyebrow>
              <h2 id="teacher-title" className="mt-5 text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.6rem]">
                {f(t.teacher.title)}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{f(t.teacher.body)}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.teacher.criteria.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 font-semibold text-foreground shadow-card ring-1 ring-hairline"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf/15 text-[#13873a]">
                      <Check className="h-4 w-4" weight="bold" aria-hidden="true" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[15px] text-muted-foreground">{f(t.teacher.note)}</p>
              <a
                href={links.teacherApproved}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary-strong underline decoration-2 underline-offset-4 hover:text-primary-deep"
              >
                {t.teacher.link}
                <ArrowUpRight className="h-4 w-4" weight="bold" aria-hidden="true" />
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
