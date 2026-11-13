import { Fragment, type ReactNode } from "react";
import { Link } from "react-router";
import { useI18n } from "@/i18n/I18nProvider";
import type { Vars } from "@/i18n/format";

// Renders translated strings with light inline markup:
//   **bold**        -> <strong>
//   [label](href)   -> internal <Link>, in-page anchor, mailto/tel or external link
// Placeholders ({app}, {email}, ...) are filled first.

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function Rich({ text, vars }: { text: string; vars?: Vars }) {
  const { f, path, t } = useI18n();
  const source = f(text, vars);
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;

  for (const m of source.matchAll(TOKEN)) {
    const index = m.index ?? 0;
    if (index > last) out.push(source.slice(last, index));
    const key = `r${i++}`;

    if (m[1] !== undefined) {
      out.push(<strong key={key}>{m[1]}</strong>);
    } else {
      const label = m[2];
      const href = m[3];
      if (href.startsWith("/")) {
        out.push(
          <Link key={key} to={path(href)}>
            {label}
          </Link>
        );
      } else if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        out.push(
          <a key={key} href={href}>
            {label}
          </a>
        );
      } else {
        out.push(
          <a key={key} href={href} target="_blank" rel="noopener noreferrer">
            {label}
            <span className="sr-only"> ({t.common.newTab})</span>
          </a>
        );
      }
    }
    last = index + m[0].length;
  }
  if (last < source.length) out.push(source.slice(last));

  return <Fragment>{out}</Fragment>;
}
