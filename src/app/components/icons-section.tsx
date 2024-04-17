import React from "react";
import LeftColumnIcons from "./elements/left-column-icons";
import RightColumnIcons from "./elements/right-column-icons";

const IconsSection = () => {
  return (
    <div className="py-10 flex flex-col">
      <h2 className="text-xl font-semibold pb-10">Cosa troverai</h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-28 ms-5">
        <LeftColumnIcons />
        <RightColumnIcons />
      </div>
    </div>
  );
};

export default IconsSection;
