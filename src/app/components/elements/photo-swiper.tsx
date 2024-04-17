"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import PhotoModal from "./photo-modal";
import { Navigation } from "swiper/modules";

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
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
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
