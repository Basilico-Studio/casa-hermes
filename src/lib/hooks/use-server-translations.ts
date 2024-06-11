import initTranslations from "@/i18n";

const useServerTranslations = async (locale: string) => {
  return initTranslations(locale);
};

export default useServerTranslations;
