"use client";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

import { useState } from "react";
import ReviewForm from "./ReviewForm";

function StarRatings({ productId }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <>
      <div className="flex ">
        {Array.from({ length: 5 }, (_, i) => {
          const value = i + 1;
          const isFilled = value <= (hoverRating || rating); // Show hover first, fallback to rating
          const Star = isFilled ? StarSolid : StarOutline;
          return (
            <Star
              key={value}
              onClick={() => handleRating(value)}
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              className={`cursor-pointer transition-colors h-6 w-6 ${
                isFilled ? "text-yellow-500" : "text-gray-300"
              }hover:text-yellow-400`}
            />
          );
        })}
      </div>
      <ReviewForm userRating={rating} productId={productId} />
    </>
  );
}

export default StarRatings;
