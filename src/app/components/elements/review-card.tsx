import React from "react";
import StarsRating from "./stars-rating";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

export interface ReviewCardProps {
  guestName: string;
  text: string;
  rating: number;
}

const ReviewCard = ({ guestName, text, rating }: ReviewCardProps) => {
  return (
    <div className="bg-white min-h-[250px] flex flex-col justify-between py-3 px-5 gap-4 border border-slate-700 rounded-md text-center">
      <div className="flex justify-center gap-4">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <UserCircle size={32} />
            <p className="text-xl font-semibold">{guestName}</p>
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <StarsRating rating={rating} />
      </div>
    </div>
  );
};

export default ReviewCard;
