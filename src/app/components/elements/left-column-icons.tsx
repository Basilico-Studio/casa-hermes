import { Car, FlowerTulip, PawPrint, Siren, WifiHigh } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const LeftColumnIcons = () => {
  return (
    <div className="flex flex-col gap-5 text-lg">
      <div className="flex items-center gap-5">
        <FlowerTulip size={28} className="md:size-7" />
        <p>Vista sul giardino</p>
      </div>
      <div className="flex items-center gap-5">
        <WifiHigh size={28} className="md:size-7" />
        <p>WiFi: 4 Mbps</p>
      </div>
      <div className="flex items-center gap-5">
        <Car size={28} className="md:size-7" />
        <p>Parcheggio gratuito nella proprietà</p>
      </div>
      <div className="flex items-center gap-5">
        <PawPrint size={28} className="md:size-7" />
        <p>Animali domestici ammessi</p>
      </div>
      <div className="flex items-center gap-5">
        <Siren size={28} className="md:size-7" />
        <p className="line-through">Rilevatore di monossido di carbonio</p>
      </div>
    </div>
  );
};

export default LeftColumnIcons;
