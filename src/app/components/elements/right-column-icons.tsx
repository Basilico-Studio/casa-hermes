import { Desk, ForkKnife, Siren, SwimmingPool, TelevisionSimple } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const RightColumnIcons = () => {
  return (
    <div className="flex flex-col gap-5 text-lg">
      <div className="flex items-center gap-5">
        <ForkKnife size={28} className="md:size-10" />
        <p>Cucina</p>
      </div>
      <div className="flex items-center gap-5">
        <Desk size={28} className="md:size-10" />
        <p>Spazio di lavoro dedicato</p>
      </div>
      <div className="flex items-center gap-5">
        <SwimmingPool size={28} className="md:size-10" />
        <p>Piscina &#40;servizio condiviso&#41;</p>
      </div>
      <div className="flex items-center gap-5">
        <TelevisionSimple size={28} className="md:size-10" />
        <p>TV</p>
      </div>
      <div className="flex items-center gap-5">
        <Siren size={28} className="md:size-10" />
        <p className="line-through">Allarme antincendio</p>
      </div>
    </div>
  );
};

export default RightColumnIcons;
