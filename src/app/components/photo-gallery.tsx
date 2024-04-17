import React from "react";
import PhotoSwiper from "./elements/photo-swiper";
import { pictures } from "../../../lib/pics";

const PhotoGallery = () => {
  return (
    <div className="py-10 space-y-5">
      <div className="flex flex-col gap-6 items-center justify-center py-10">
        <h2 className="uppercase text-2xl md:text-4xl font-semibold">il ristorante</h2>
        <p className="text-md md:text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nostrum nulla exercitationem, obcaecati libero rerum soluta? Est corrupti deleniti necessitatibus
          doloremque voluptatibus corporis dolorum illum aperiam aliquid iste, neque placeat fugit excepturi at accusantium debitis!
        </p>
      </div>
      <PhotoSwiper photos={pictures} />
    </div>
  );
};

export default PhotoGallery;
