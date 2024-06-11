import i18nConfig from "@/i18n-config";
import { ReactNode } from "react";
import TranslationsProvider from "../_components/translation-provider";
import LanguageSwitcher from "../_components/language-switcher";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function MainLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
  return (
    <TranslationsProvider locale={locale}>
      {children}
      <LanguageSwitcher locale={locale} />
    </TranslationsProvider>
  );
}
