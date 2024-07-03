"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps,
} from "@/components/ui/carousel";
import { useState } from "react";
import PhotoModal from "./photo-modal";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: string[];
  itemClassNames?: string;
} & CarouselProps;

export function ImageCarousel({
  images = [],
  itemClassNames = "basis-1/2",
  ...carouselProps
}: ImageCarouselProps) {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setShowPhotoModal(true);
  };
  return (
    <>
      <Carousel {...carouselProps}>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className={cn(itemClassNames)}>
              <img
                key={img}
                src={img}
                alt="Image"
                className="h-full w-full cursor-pointer rounded-md"
                onClick={() => handleOpenModal(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 lg:-left-12" />
        <CarouselNext className="right-2 lg:-right-12" />
      </Carousel>
      {showPhotoModal && (
        <PhotoModal
          onClose={() => setShowPhotoModal(false)}
          photos={images}
          index={slideNumber}
        />
      )}
    </>
  );
}
