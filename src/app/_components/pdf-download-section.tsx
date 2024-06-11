import React from "react";
import { Button } from "./elements/button";

const PdfDonwloadSection = () => {
  return (
    <div id="itinerari" className="flex flex-col gap-5 md:gap-0 lg:flex-row justify-center items-center md:justify-around py-10 text-lg md:text-xl text-center">
      <Button className="bg-[#72a16b] rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer">Itinerario IT</Button>
      <Button className="bg-[#72a16b] rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer">Brouchure ENG</Button>
      <Button className="bg-[#72a16b] rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer">Brouchure DE</Button>
    </div>
  );
};

export default PdfDonwloadSection;
