import { useState, type FormEvent } from "react";
import { site, addressLine } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Rich } from "@/components/Rich";
import { TeacherChip, GooglePlayBadge } from "@/components/Badges";
import { useDocumentHead } from "@/seo/useDocumentHead";
import {
  ChatCircleDots,
  Clock,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  Phone,
  type Icon,
} from "@/components/icons";

export default function Contact() {
  const { t, f } = useI18n();
  useDocumentHead("contact");
  // The topic is kept as an index so it survives a language switch.
  const [form, setForm] = useState({ name: "", email: "", topic: 0, message: "" });
  const topic = t.contact.topics[form.topic] ?? t.contact.topics[0];

  const cards: { Icon: Icon; label: string; value: string; note: string; href?: string; tint: string }[] = [
    {
      Icon: EnvelopeSimple,
      label: t.contact.emailLabel,
      value: site.email,
      note: t.contact.emailNote,
      href: `mailto:${site.email}`,
      tint: "bg-primary/15 text-primary-strong",
    },
    {
      Icon: Phone,
      label: t.contact.phoneLabel,
      value: site.phoneDisplay,
      note: t.contact.phoneNote,
      href: `tel:${site.phoneHref}`,
      tint: "bg-leaf/15 text-[#13873a]",
    },
    {
      Icon: MapPin,
      label: t.contact.addressLabel,
      value: addressLine,
      note: t.contact.addressNote,
      tint: "bg-berry/15 text-[#c21f63]",
    },
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `[${topic}] ${t.contact.mailSubject}`;
    const body = `${t.contact.name}: ${form.name}\n${t.contact.email}: ${form.email}\n${t.contact.topic}: ${topic}\n\n${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "mt-2 w-full rounded-2xl bg-white px-4 py-3.5 text-[16px] text-foreground shadow-[inset_0_1px_2px_rgb(28_58_65/0.06)] outline-none ring-1 ring-hairline transition-shadow placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary-strong";
  const label = "text-[15px] font-semibold text-foreground";

  return (
    <>
      <PageHeader
        icon={ChatCircleDots}
        eyebrow={t.contact.eyebrow}
        title={f(t.contact.title)}
        crumb={t.nav.contact}
        intro={<p>{f(t.contact.intro)}</p>}
      />

      <div className="container-page pb-24">
        <ul className="grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const inner = (
              <>
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${c.tint}`}>
                  <c.Icon className="icon-anim-pop h-6 w-6" weight="duotone" aria-hidden="true" />
                </span>
                <span className="mt-5 block text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {c.label}
                </span>
                <span className="mt-1.5 block break-words font-display text-xl font-medium leading-snug text-foreground">
                  {c.value}
                </span>
                <span className="mt-2 block text-[15px] text-muted-foreground">{c.note}</span>
              </>
            );
            const cls =
              "group block h-full rounded-[26px] bg-white p-7 shadow-card ring-1 ring-hairline transition-transform duration-300";
            return (
              <Reveal as="li" key={c.label} delay={i * 80}>
                {c.href ? (
                  <a href={c.href} className={`${cls} hover:-translate-y-1`}>
                    {inner}
                  </a>
                ) : (
                  <address className={`${cls} not-italic`}>{inner}</address>
                )}
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_1fr]">
          {/* Form */}
          <Reveal className="rounded-[28px] bg-white p-7 shadow-card ring-1 ring-hairline sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{f(t.contact.formTitle)}</h2>
            <p className="mt-2 text-muted-foreground">{f(t.contact.formIntro)}</p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="c-name">
                    {t.contact.name}
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePh}
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="c-email">
                    {t.contact.email}
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.emailPh}
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="c-topic">
                  {t.contact.topic}
                </label>
                <select
                  id="c-topic"
                  name="topic"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: Number(e.target.value) })}
                  className={`${field} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%231f6fd6'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-12`}
                >
                  {t.contact.topics.map((label, i) => (
                    <option key={label} value={i}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="c-message">
                  {t.contact.message}
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePh}
                  className={`${field} resize-y`}
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="link-inline text-sm text-muted-foreground">
                  <Rich text={t.contact.privacyNote} />
                </p>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-strong px-7 py-3.5 font-semibold text-white shadow-[0_14px_30px_-14px_rgb(31_111_214/0.8)] transition-all hover:-translate-y-0.5 hover:bg-primary-deep"
                >
                  <PaperPlaneTilt className="h-5 w-5" weight="fill" aria-hidden="true" />
                  {t.contact.send}
                </button>
              </div>
            </form>
          </Reveal>

          {/* Side panel */}
          <div className="grid content-start gap-5">
            <Reveal delay={80} className="flex items-start gap-4 rounded-[26px] bg-white p-7 shadow-card ring-1 ring-hairline">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sun/25 text-[#b77400]">
                <Clock className="h-6 w-6" weight="duotone" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-foreground">{f(t.contact.responseTitle)}</h2>
                <p className="mt-1.5 text-muted-foreground">{f(t.contact.responseBody)}</p>
              </div>
            </Reveal>
            <Reveal
              delay={140}
              className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#1f6fd6,#13407e)] p-7 text-white shadow-lift"
            >
              <img
                src="/img/app-icon-128.webp"
                width={128}
                height={128}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-16 w-16 rounded-[18px] ring-4 ring-white/20"
              />
              <h2 className="mt-5 text-xl font-semibold">{t.app.name}</h2>
              <p className="mt-1.5 text-white/80">{f(t.cta.note)}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <GooglePlayBadge size="sm" />
                <TeacherChip className="bg-white! text-primary-deep" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
