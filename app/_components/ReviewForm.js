"use client";

import { startTransition, useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhotoVideo } from "react-icons/fa";
import { submitReview } from "../_lib/actions";

function ReviewForm({ userRating, productId }) {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  // const [rating, setRating] = useState(userRating);
  const rating = { rating: userRating };
  const [state, formAction, pending] = useActionState(async (state, input) => {
    return await submitReview(input, rating, productId);
  });

  // function handleFileChange((e)=> (
  //   // e.target.value
  // ))

  function onSubmit({ title, description }) {
    startTransition(() => {
      formAction({ title, description });
    });
  }

  return (
    <form action={handleSubmit(onSubmit)}>
      <p>Please enter a title</p>
      <p className="text-red-500">{errors?.title?.message}</p>
      <input
        type="text"
        id="title"
        className=" px-2 border border-gray-300 mb-2"
        {...register("title", { required: "This field is required" })}
      />
      <p>Write a review</p>

      <p className="text-red-500">{errors?.description?.message}</p>
      <input
        type="text"
        placeholder="How you'd like your product?"
        className="py-4 px-4 border border-gray-300 mb-5"
        id="description"
        {...register("description", { required: "Please enter a description" })}
      />
      <p className="mb-1">Upload a Picture</p>
      <div>
        <div className="py-5 px-5 w-30  bg-gray-300">
          <FaPhotoVideo className="w-5 h-5" />
        </div>
        {/* <input type="file" /> */}
      </div>

      <button className="bg-button mt-3 py-2 px-2 cursor-pointer">
        <p>submit</p>
      </button>
    </form>
  );
}

export default ReviewForm;
