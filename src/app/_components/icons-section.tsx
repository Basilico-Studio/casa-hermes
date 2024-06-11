import React from "react";
import LeftColumnIcons from "./elements/left-column-icons";
import RightColumnIcons from "./elements/right-column-icons";

type IconsSectionProps = {
  params: any;
};

const IconsSection = ({ params }: IconsSectionProps) => {
  return (
    <div className="py-10 flex flex-col">
      <h2 className="text-xl font-semibold pb-10">Cosa troverai</h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-28 ms-5">
        <LeftColumnIcons params={params} />
        <RightColumnIcons params={params} />
      </div>
    </div>
  );
};

export default IconsSection;
