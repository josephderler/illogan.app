import { Link } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRight,
  ChalkboardTeacher,
  GearSix,
  HandPointing,
  ProhibitInset,
  ShieldCheck,
  UsersThree,
  type Icon,
} from "@/components/icons";

const ICONS: { Icon: Icon; anim: string; tint: string }[] = [
  { Icon: ProhibitInset, anim: "icon-anim-pop", tint: "bg-berry/15 text-[#c21f63]" },
  { Icon: ShieldCheck, anim: "icon-anim-beat", tint: "bg-primary/15 text-primary-strong" },
  { Icon: HandPointing, anim: "icon-anim-bounce", tint: "bg-sun/25 text-[#b77400]" },
  { Icon: GearSix, anim: "icon-anim-tilt", tint: "bg-grape/20 text-[#6a3fc4]" },
  { Icon: UsersThree, anim: "icon-anim-wiggle", tint: "bg-leaf/15 text-[#13873a]" },
  { Icon: ChalkboardTeacher, anim: "icon-anim-swing", tint: "bg-mint/25 text-[#11806f]" },
];

export function Parents() {
  const { t, f, path } = useI18n();

  return (
    <section id="parents" aria-labelledby="parents-title" className="relative bg-sky-50 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="parents-title"
          eyebrow={t.parents.eyebrow}
          title={f(t.parents.title)}
          subtitle={f(t.parents.subtitle)}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.parents.items.map((item, i) => {
            const { Icon, anim, tint } = ICONS[i];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 80}
                className="group rounded-[26px] bg-white p-7 shadow-card ring-1 ring-hairline transition-transform duration-300 hover:-translate-y-1"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}>
                  <Icon className={`h-6 w-6 ${anim}`} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{f(item.title)}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{f(item.body)}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 text-center">
          <Link
            to={path("/privacy")}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-strong shadow-card ring-1 ring-hairline transition-all hover:-translate-y-0.5"
          >
            {t.parents.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
