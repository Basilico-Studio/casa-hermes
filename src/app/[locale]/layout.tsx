import i18nConfig from "@/i18n-config";
import { ReactNode } from "react";
import TranslationsProvider from "../../components/common/translation-provider";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function MainLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <TranslationsProvider locale={locale}>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </TranslationsProvider>
  );
}
