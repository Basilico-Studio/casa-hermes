import React, { useState } from "react";

interface PhotoModalProps {
  onClose: () => void;
  photos: string[];
  index: number;
}

const PhotoModal = ({ onClose, photos, index }: PhotoModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  console.log(index, currentIndex);

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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="w-4/5 h-[90%] flex flex-col aspect-video">
        <button className="text-primary text-lg place-self-end pr-2" onClick={() => onClose()}>
          X
        </button>
        <div className="overflow-hidden aspect-square h-full flex flex-col rounded">
          <div className="absolute top-[50%] left-5" onClick={prevSlide}>
            <p>ICON</p>
          </div>
          <div className="absolute top-[50%] right-5" onClick={nextSlide}>
            <p>ICON</p>
          </div>
          <div className="h-[600px] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${photos[currentIndex]})` }} />
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
