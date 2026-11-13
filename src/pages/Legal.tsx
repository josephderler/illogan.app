import { useI18n } from "@/i18n/I18nProvider";
import { LegalPage } from "@/components/LegalPage";

export function Privacy() {
  const { t } = useI18n();
  return <LegalPage doc={t.legal.privacy} page="privacy" />;
}

export function Terms() {
  const { t } = useI18n();
  return <LegalPage doc={t.legal.terms} page="terms" />;
}

export function Cookies() {
  const { t } = useI18n();
  return <LegalPage doc={t.legal.cookies} page="cookies" />;
}
