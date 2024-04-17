"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import PhotoModal from "./photo-modal";

type PhotoSwiperProps = {
  photos: string[];
};

const PhotoSwiper = ({ photos }: PhotoSwiperProps) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setShowPhotoModal(true);
  };

  return (
    <div>
      <div className="sm:w-300 md:w-500 lg:w-700">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 1,
            },
            500: {
              width: 500,
              slidesPerView: 2,
            },
            700: {
              width: 700,
              slidesPerView: 4.2,
            },
          }}
        >
          {photos.map((picture, index) => {
            return (
              <SwiperSlide className="py-2">
                <div className="rounded overflow-hidden bg-gray-400 aspect-square w-full h-full hover:-translate-y-1 transition-all duration-300">
                  <img key={index} src={picture} alt="test" className="h-full w-full cursor-pointer " onClick={() => handleOpenModal(index)} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {showPhotoModal && <PhotoModal onClose={() => setShowPhotoModal(false)} photos={photos} index={slideNumber} />}
    </div>
  );
};

export default PhotoSwiper;
