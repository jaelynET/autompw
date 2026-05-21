"use client";

import { UserIcon } from "@heroicons/react/24/outline";
import { RxAvatar } from "react-icons/rx";

function ReviewCard({ review }) {
  const { title, description } = review;
  return (
    <div className="ml-3">
      <div className="flex gap-3">
        <RxAvatar width={24} height={24} className="self-center" />
        <h3 className="mb-2">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ReviewCard;
