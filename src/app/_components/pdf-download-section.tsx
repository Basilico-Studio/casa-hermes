import React from "react";

const PdfDonwloadSection = () => {
  return (
    <div id="itinerari" className="flex flex-col gap-5 md:gap-0 lg:flex-row justify-center items-center md:justify-around py-10 text-lg md:text-xl text-center">
      <a
        href="/public/brouchures/Casa_Vacanze_Hermes_Brouchure_It.pdf"
        className="bg-[#72a16b] rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer hover:bg-opacity-80 transition-all duration-300"
        download=""
      >
        Itinerario IT
      </a>
      <a className="bg-[#72a16b] rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer hover:bg-opacity-80 transition-all duration-300">
        Brouchure ENG
      </a>
      <a className="bg-[#72a16b] rounded-full text-white py-4 flex justify-center items-center px-14 min-w-[300px] cursor-pointer hover:bg-opacity-80 transition-all duration-300">
        Brouchure DE
      </a>
    </div>
  );
};

export default PdfDonwloadSection;
