import React from "react";
import PhotoSwiper from "./elements/photo-swiper";
import { imagesUrls } from "../../../lib/pics";

const PhotoGallery = () => {
  return (
    <div id="appartamento" className="py-10 space-y-5 md:container md:mx-auto">
      <div className="flex flex-col gap-6 items-center justify-center py-10 px-8 md:px-0">
        <h2 className="uppercase text-2xl font-semibold">L'appartamento</h2>
        <p className="text-md md:text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nostrum nulla exercitationem, obcaecati libero rerum soluta? Est corrupti deleniti necessitatibus
          doloremque voluptatibus corporis dolorum illum aperiam aliquid iste, neque placeat fugit excepturi at accusantium debitis!
        </p>
      </div>
      <PhotoSwiper photos={imagesUrls as string[]} />
    </div>
  );
};

export default PhotoGallery;
