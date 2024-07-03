import { X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface PhotoModalProps {
  onClose: () => void;
  photos: string[];
  index: number;
}

const PhotoModal = ({ photos, onClose, index }: PhotoModalProps) => {
  return (
    <section className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen z-40 p-10">
      <div className="fixed top-0 left-0 inset-0 bg-black bg-opacity-70 z-40 h-screen" />
      <Carousel
        className="relative z-50"
        opts={{
          startIndex: index,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {photos.map((img) => (
            <CarouselItem key={img} className="flex justify-center">
              <img
                key={img}
                src={img}
                alt="Image"
                className="lg:h-[90vh] h-auto w-auto rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={onClose}
          className="absolute lg:top-12 top-2 lg:right-12 right-2 rounded-full size-8"
        >
          <X className="size-4" />
        </Button>
        <CarouselPrevious className="lg:left-12 left-2" />
        <CarouselNext className="lg:right-12 right-2" />
      </Carousel>
    </section>
  );
};

export default PhotoModal;
