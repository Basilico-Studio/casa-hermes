"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/i18n-config";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import Image from "next/image";

interface LanguageSwitcherProps {
  locale: string;
}

const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const { i18n } = useClientTranslations();

  const langs = i18nConfig.locales.filter((l) => locale !== l);

  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <div className="absolute top-5 right-6 z-30">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="bg-white rounded w-10 h-10 flex items-center justify-center outline-none ring-0">
            <Image src={`/images/flags/${locale}.svg`} alt={locale} width={50} height={50} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="flex flex-col z-30" sideOffset={5}>
            {langs.map((l) => (
              <div key={l} className="h-10 w-10 flex justify-center items-center rounded bg-white opacity-70 hover:opacity-100 transition-all duration-300">
                <DropdownMenu.Item asChild className="!ring-0 !outline-none">
                  <button onClick={() => handleLocaleChange(l)}>
                    <Image src={`/images/flags/${l}.svg`} alt={l} width={50} height={50} />
                  </button>
                </DropdownMenu.Item>
              </div>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default LanguageSwitcher;
