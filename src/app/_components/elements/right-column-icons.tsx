import useServerTranslations from "@/lib/hooks/use-server-translations";
import { Desk, ForkKnife, Siren, SwimmingPool, TelevisionSimple } from "@phosphor-icons/react/dist/ssr";
import React from "react";

type RightColumnIconsProps = {
  params: any;
};

const RightColumnIcons = async ({ params }: RightColumnIconsProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <div className="flex flex-col gap-5 text-lg">
      <div className="flex items-center gap-5">
        <ForkKnife size={28} className="md:size-7" />
        <p>{t("iconKitchenText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <Desk size={28} className="md:size-7" />
        <p>{t("iconDeskText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <SwimmingPool size={28} className="md:size-7" />
        <p>{t("iconPoolText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <TelevisionSimple size={28} className="md:size-7" />
        <p>{t("iconTvText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <Siren size={28} className="md:size-7" />
        <p className="line-through">{t("iconSirenText")}</p>
      </div>
    </div>
  );
};

export default RightColumnIcons;
