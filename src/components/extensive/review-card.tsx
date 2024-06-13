import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import StarsRating from "./stars-rating";

export interface ReviewCardProps {
  guestName: string;
  text: string;
  rating: number;
}

const ReviewCard = ({ guestName, text, rating }: ReviewCardProps) => {
  return (
    <div className="bg-primary-foreground h-full flex flex-col p-5 gap-4 rounded cursor-grab">
      <div className="flex gap-4">
        <UserCircle className="size-8 text-primary" />
        <div>
          <p className="text-sm font-primary">{guestName}</p>
          <StarsRating rating={rating} />
        </div>
      </div>
      <div>
        <p className="font-light text-sm line-clamp-4">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
