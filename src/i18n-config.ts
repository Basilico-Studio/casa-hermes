import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["it", "en", "de"],
  defaultLocale: "it",
  // @ts-expect-error
  routingStrategy: "dynamicSegment",
};

export default i18nConfig;
