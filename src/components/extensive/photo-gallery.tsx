import React from "react";
import PhotoSwiper from "./photo-swiper";
import { imagesUrls } from "../../lib/pics";
import useServerTranslations from "@/lib/hooks/use-server-translations";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import { Section } from "../common/section";
import { Button } from "../ui/button";
import Link from "next/link";
import { BrochureButton } from "./brochure-button";

type PhotoGalleryProps = {
  params: any;
};

const PhotoGallery = async ({ params }: PhotoGalleryProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <Section id="appartamento" className=" bg-primary-foreground">
      <Container className="space-y-10">
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
        <PhotoSwiper photos={imagesUrls as string[]} />
      </Container>
    </Section>
  );
};

export default PhotoGallery;
