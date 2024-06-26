"use client";

import { I18nextProvider } from "react-i18next";
import { PropsWithChildren, useEffect, useState } from "react";

import { i18n as i18nInterface } from "i18next";
import initTranslations from "@/i18n";

let i18n: i18nInterface;

export default function TranslationsProvider({ children, locale }: PropsWithChildren<{ locale: string }>) {
  const [instance, setInstance] = useState(i18n);

  useEffect(() => {
    const init = async () => {
      if (!i18n) {
        const newInstance = await initTranslations(locale);
        i18n = newInstance;
        setInstance(newInstance);
      } else {
        if (i18n.language !== locale) {
          i18n.changeLanguage(locale);
        }
      }
    };

    init();
  }, [locale]);

  if (!instance) {
    return null;
  }

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}
