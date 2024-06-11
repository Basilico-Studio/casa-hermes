import React from "react";
import PhotoSwiper from "./elements/photo-swiper";
import { imagesUrls } from "../../lib/pics";
import useServerTranslations from "@/lib/hooks/use-server-translations";

type PhotoGalleryProps = {
  params: any;
};

const PhotoGallery = async ({ params }: PhotoGalleryProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <div id="appartamento" className="py-10 space-y-5 md:container md:mx-auto">
      <div className="flex flex-col gap-6 items-center justify-center py-10 px-8 md:px-0">
        <h2 className="uppercase text-2xl font-semibold">{t("galleryTitle")}</h2>
        <p className="text-md md:text-xl text-center">{t("gallerySubTitle")}</p>
      </div>
      <PhotoSwiper photos={imagesUrls as string[]} />
    </div>
  );
};

export default PhotoGallery;
