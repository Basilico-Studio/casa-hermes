import useServerTranslations from "@/lib/hooks/use-server-translations";
import { Car, FlowerTulip, PawPrint, Siren, WifiHigh } from "@phosphor-icons/react/dist/ssr";
import React from "react";

type LeftColumnIconsProps = {
  params: any;
};

const LeftColumnIcons = async ({ params }: LeftColumnIconsProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <div className="flex flex-col gap-5 text-lg">
      <div className="flex items-center gap-5">
        <FlowerTulip size={28} className="md:size-7" />
        <p>{t("iconFlowerText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <WifiHigh size={28} className="md:size-7" />
        <p>{t("iconWifiText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <Car size={28} className="md:size-7" />
        <p>{t("iconParkingText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <PawPrint size={28} className="md:size-7" />
        <p>{t("iconAnimalsText")}</p>
      </div>
      <div className="flex items-center gap-5">
        <Siren size={28} className="md:size-7" />
        <p className="line-through">{t("iconAlarmText")}</p>
      </div>
    </div>
  );
};

export default LeftColumnIcons;
