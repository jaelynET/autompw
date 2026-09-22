"use client";

import { product } from "../constants.js";

export default function Reviews() {
  return (
    <section className="mt-16 md:mt-24 border-t border-stone-200 pt-12 mb-24 font-sans text-stone-950 bg-white">
      {/* Section Heading & Clean Aggregate Summary */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-baseline">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-stone-950 sm:text-2xl">
            Customer Reviews
          </h2>
          <div className="mt-2.5 flex items-center gap-3">
            {/* Minimalist Stark Black Stars */}
            <div className="flex text-stone-950 shrink-0 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* 🌟 CONTRAST FIX: Bumped to text-stone-600 */}
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 tracking-wider font-mono uppercase">
              <span className="font-bold text-stone-950">4.9 / 5.0</span>
              <span className="text-stone-400 font-light">|</span>
              <span>Verified Purchases</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Row System - Converted to clean, flat split-rows */}
      <div className="divide-y divide-stone-100 border-t border-b border-stone-100">
        {(product?.reviews || reviews).map((review) => (
          <div
            key={review.id}
            className="py-8 bg-transparent flex flex-col gap-4 md:flex-row md:justify-between md:items-start"
          >
            {/* Left Side: Curator / Buyer Meta Information */}
            <div className="w-full md:w-1/4 shrink-0">
              <div className="flex items-baseline justify-between md:flex-col md:gap-1.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-950 font-mono">
                  {review.name}
                </span>

                {review.verified && (
                  /* 🌟 CONTRAST FIX: Bumped to text-stone-600 and font-bold */
                  <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-stone-600 font-mono">
                    <span className="h-1 w-1 bg-stone-950 rounded-none block" />
                    Verified Order
                  </span>
                )}

                {/* 🌟 CONTRAST FIX: Bumped to text-stone-600 */}
                <span className="text-[10px] text-stone-600 font-medium font-mono block mt-1">
                  {review.date}
                </span>
              </div>
            </div>

            {/* Right Side: Rating & Descriptive Content Assessment */}
            <div className="w-full md:w-3/4 max-w-2xl">
              <div className="flex text-stone-950 gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-2.5 w-2.5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h3 className="mt-2.5 text-sm font-bold text-stone-950 tracking-wide">
                {review.title}
              </h3>

              {/* 🌟 CONTRAST FIX: Bumped to text-stone-600 */}
              <p className="mt-2 text-xs leading-relaxed text-stone-600 font-normal">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
