"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import i18nConfig from "@/i18n-config";
import Image from "next/image";

interface LanguageSwitcherProps {
  locale: string;
}

const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const langs = i18nConfig.locales.filter((l) => locale !== l);

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="rounded size-6 flex items-center justify-center outline-none ring-0">
            <Image
              src={`/images/flags/${locale}.svg`}
              alt={locale}
              width={50}
              height={50}
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="flex flex-col z-50 bg-primary-foreground rounded"
            sideOffset={5}
          >
            {langs.map((l) => (
              <div
                key={l}
                className="size-8 flex justify-center items-center rounded transition-all duration-300"
              >
                <DropdownMenu.Item asChild className="!ring-0 !outline-none">
                  <button
                    className="size-6"
                    onClick={() => window.location.replace("/" + l)}
                  >
                    <Image
                      src={`/images/flags/${l}.svg`}
                      alt={l}
                      width={50}
                      height={50}
                    />
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
