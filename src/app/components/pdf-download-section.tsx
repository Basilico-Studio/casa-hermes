import React from "react";

const PdfDonwloadSection = () => {
  return (
    <div id="itinerari" className="flex flex-col gap-5 md:gap-0 lg:flex-row justify-center items-center md:justify-around py-10 text-lg md:text-xl text-center">
      <div className="bg-emerald-900 rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer">Itinerario IT</div>
      <div className="bg-emerald-900 rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer">Brouchure ENG</div>
      <div className="bg-emerald-900 rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer">Brouchure DE</div>
    </div>
  );
};

export default PdfDonwloadSection;
