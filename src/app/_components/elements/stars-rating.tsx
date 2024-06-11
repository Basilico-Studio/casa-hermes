import { Star } from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface StarsRatingProps {
  rating: number;
}

const StarsRating = ({ rating }: StarsRatingProps) => {
  const stars = Array.from({ length: rating }, (_, i) => i + 1);

  const missingStars = Array.from({ length: 5 - rating }, (_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {stars.map((star) => {
        return <Star name="star" className="text-yellow-500" key={star} size={30} />;
      })}
      {missingStars.map((star) => {
        return <Star name="star" className="text-gray-500" key={star} size={30} />;
      })}
    </div>
  );
};

export default StarsRating;
