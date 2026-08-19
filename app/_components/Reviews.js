"use client";
import { product } from "../constants.js";
function Reviews() {
  return (
    <section className="mt-16 border-t border-stone-200 pt-12 mb-24">
      {/* Section Heading & Aggregate Rating */}
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl">
            Customer Reviews
          </h2>
          <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            {/* Stars container - perfectly centered with text on desktop */}
            <div className="flex text-amber-500 shrink-0">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Text container - stacks or rows out beautifully depending on screen size */}
            <div className="flex items-center gap-1.5 text-sm font-medium text-stone-500 leading-none">
              <span className="font-bold text-stone-950">4.9 out of 5</span>
              <span className="text-stone-300">·</span>
              <span>Based on verified orders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {product.reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div>
              {/* Header: Avatar, Name, Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-xs font-bold text-stone-700 border border-stone-200">
                    {review.avatar}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-stone-950">
                      {review.name}
                    </span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <svg
                          className="h-3 w-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified Buyer
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium">
                  {review.date}
                </span>
              </div>

              {/* Stars & Title */}
              <div className="mt-4">
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="mt-2 text-sm font-bold text-stone-950 leading-tight">
                  {review.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-6 text-stone-600">
                  {review.comment}
                </p>
              </div>
            </div>

            {/* Optional Review Image
            {review.image && (
              <div className="relative mt-4 h-32 w-full overflow-hidden rounded-xl border border-stone-100 bg-stone-50">
                <img
                  src={review.image}
                  alt="Customer uploaded review photo"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Reviews;
