import { Star } from "lucide-react";
import React from "react";

interface StarsRatingProps {
  rating: number;
}

const StarsRating = ({ rating }: StarsRatingProps) => {
  const stars = Array.from({ length: rating }, (_, i) => i + 1);

  const missingStars = Array.from({ length: 5 - rating }, (_, i) => i + 1);

  return (
    <div className="flex">
      {stars.map((star) => {
        return (
          <Star
            name="star"
            className="text-yellow-500 fill-yellow-500"
            key={star}
            size={19}
          />
        );
      })}
      {missingStars.map((star) => {
        return (
          <Star
            name="star"
            className="text-gray-500 fill-gray-500 opacity-10"
            key={star}
            size={19}
          />
        );
      })}
    </div>
  );
};

export default StarsRating;
