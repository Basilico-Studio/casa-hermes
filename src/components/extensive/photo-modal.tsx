import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import React, { useState } from "react";

interface PhotoModalProps {
  onClose: () => void;
  photos: string[];
  index: number;
}

const PhotoModal = ({ onClose, photos, index }: PhotoModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 hidden md:flex justify-center items-center z-50">
      <div className="w-4/5 h-[50%] flex flex-col">
        <div className="overflow-hidden aspect-square h-full flex flex-col rounded">
          <button
            className="absolute top-[50%] left-1 md:left-64"
            onClick={prevSlide}
          >
            <CaretLeft
              className="text-black rounded-full p-1 bg-primary-foreground"
              size={32}
            />
          </button>
          <button
            className="absolute top-[50%] right-1 md:right-64"
            onClick={nextSlide}
          >
            <CaretRight
              className="text-black rounded-full p-1 bg-primary-foreground"
              size={32}
            />
          </button>
          <button
            className="text-primary text-lg absolute top-[35%] md:top-[25%] right-1 md:right-64 "
            onClick={() => onClose()}
          >
            <X
              className="text-primary-foreground rounded-full p-1 bg-red-400"
              size={32}
            />
          </button>
          <div
            className="h-[600px] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${photos[currentIndex]})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
