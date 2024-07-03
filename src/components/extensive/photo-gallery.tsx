import React from "react";
import { imagesUrls, imagesUrls2 } from "../../lib/pics";
import useServerTranslations from "@/lib/hooks/use-server-translations";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import { Section } from "../common/section";
import { BrochureButton } from "./brochure-button";
import { ImageCarousel } from "./image-carousel";

type PhotoGalleryProps = {
  params: any;
};

const PhotoGallery = async ({ params }: PhotoGalleryProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <Section id="appartamento" className=" bg-primary-foreground space-y-10">
      <Container>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2
              className={cn(
                secondaryFont.className,
                "lg:text-4xl text-2xl font-bold"
              )}
            >
              {t("galleryTitle")}
            </h2>
            <BrochureButton />
          </div>
          <p className="font-light">{t("gallerySubTitle")}</p>
        </div>
      </Container>
      <Container className="space-y-4">
        <ImageCarousel
          images={imagesUrls2}
          itemClassNames="lg:basis-1/3 md:basis-1/2"
        />
        <ImageCarousel
          images={imagesUrls}
          itemClassNames="lg:basis-1/3 md:basis-1/2"
        />
      </Container>
    </Section>
  );
};

export default PhotoGallery;
