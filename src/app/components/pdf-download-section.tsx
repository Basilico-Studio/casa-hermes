import React from "react";

const PdfDonwloadSection = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-0 lg:flex-row justify-center items-center md:justify-between py-20 text-xl md:text-4xl text-center">
      <div className="bg-emerald-900 rounded-full text-white py-5 flex justify-center items-center px-20 min-w-[300px] md:min-w-[400px] cursor-pointer">Itinerario IT</div>
      <div className="bg-emerald-900 rounded-full text-white py-5 flex justify-center items-center px-20 min-w-[300px] md:min-w-[400px] cursor-pointer">Brouchure ENG</div>
      <div className="bg-emerald-900 rounded-full text-white py-5 flex justify-center items-center px-20 min-w-[300px] md:min-w-[400px] cursor-pointer">Brouchure DE</div>
    </div>
  );
};

export default PdfDonwloadSection;
