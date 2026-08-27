"use client";
import { product } from "../constants.js";
function Reviews() {
  return (
    <section className="mt-20 border-t border-stone-200 pt-12 mb-24 font-sans mx-4 min-[375px]:mx-8 min-[425px]:mx-11">
      {/* Section Heading & Clean Aggregate Summary */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-baseline">
        <div>
          <h2 className="text-xl font-normal tracking-tight text-stone-950 sm:text-2xl">
            Customer Registry
          </h2>
          <div className="mt-2.5 flex items-center gap-3">
            {/* Minimalist Stark Black Stars (No cheap gold/amber colors) */}
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

            <div className="flex items-center gap-2 text-xs font-normal text-stone-500 tracking-wide">
              <span className="font-semibold text-stone-950">4.9 / 5.0</span>
              <span className="text-stone-200 font-light">|</span>
              <span>Verified studio allocations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Row System - Converted from box cards to clean, flat split-rows */}
      <div className="divide-y divide-stone-100 border-t border-b border-stone-100">
        {product.reviews.map((review) => (
          <div
            key={review.id}
            className="py-8 bg-transparent flex flex-col gap-4 md:flex-row md:justify-between md:items-start"
          >
            {/* Left Side: Curator / Buyer Meta Information */}
            <div className="w-full md:w-1/4 shrink-0">
              <div className="flex items-baseline justify-between md:flex-col md:gap-1.5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-stone-950 font-mono">
                  {review.name}
                </span>

                {review.verified && (
                  <span className="flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase text-stone-400 font-mono">
                    <span className="h-1 w-1 bg-stone-400 rounded-none block" />
                    Verified Order
                  </span>
                )}

                <span className="text-[10px] text-stone-400 font-normal font-mono block mt-1">
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

              <h4 className="mt-2.5 text-sm font-medium text-stone-950 tracking-wide">
                {review.title}
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-stone-500 font-normal">
                {review.comment}
              </p>

              {/* Optional Review Image - Styled with razor sharp edges to fit theme 
              {review.image && (
                <div className="relative mt-4 h-24 w-32 border border-stone-100 bg-stone-50 rounded-none overflow-hidden">
                 <img
                    src={review.image}
                    alt="Customer uploaded environment setting"
                    className="h-full w-full object-cover rounded-none"
                  /> 
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
                </div>
              )}
                */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
