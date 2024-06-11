import { UseTranslationOptions, useTranslation } from "react-i18next";

const useClientTranslations = (ns?: undefined, options?: UseTranslationOptions<undefined> | undefined) => {
  return useTranslation(ns, options);
};

export default useClientTranslations;
