export default function FAQList() {
  return (
    <section className="mt-20 border-t border-stone-200 pt-12 mb-20 font-sans">
      {/* Section Heading — Clean and Tailored to Custom Jewelry */}
      <div className="mb-10">
        <h2 className="text-xl font-normal tracking-tight text-stone-950 sm:text-2xl">
          Frequently Asked Questions
        </h2>
        {/* <p className="mt-2 text-xs leading-relaxed text-stone-600 font-normal">
          Customization guidelines, material specifications, and tracking
          details.
        </p> */}
      </div>

      {/* FAQ Accordion List — Minimalist Architectural Divider Stack */}
      <div className="divide-y divide-stone-100 border-t border-b border-stone-100">
        {/* Question 1: Core Mechanical Operation / Photo Guidelines */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                What kind of pet photos work best for engraving?
              </span>
              <span className="transition-transform duration-200 group-open:rotate-45 text-stone-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-xs leading-relaxed text-stone-600 max-w-xl transition-all">
              Any clear smartphone photo taken in decent lighting works
              perfectly! Our design software automatically isolates your
              pet&aspos;s face boundaries, filters out busy background elements,
              and formats the image profile into a high-contrast artisan
              engraving outline.
            </div>
          </details>
        </div>

        {/* Question 2: Material Safety / Shower & Irritation Objection */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Will the necklace irritate sensitive skin or rust?
              </span>
              <span className="transition-transform duration-200 group-open:rotate-45 text-stone-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-xs leading-relaxed text-stone-600 max-w-xl transition-all">
              Never. We build exclusively on a solid foundation of premium,
              marine-grade stainless steel coated in a durable 18k gold plating.
              It is 100% hypoallergenic, nickel-free, and rustless. You can wear
              it safely through intense workouts, swimming, or daily showers
              without turning your skin green.
            </div>
          </details>
        </div>

        {/* Question 3: Power Requirements / Shipping Timelines */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                How long does the custom creation and shipping take?
              </span>
              <span className="transition-transform duration-200 group-open:rotate-45 text-stone-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-xs leading-relaxed text-stone-600 max-w-xl transition-all">
              Because each piece requires custom photo processing and individual
              laser engraving, please allow 1–3 business days for production.
              Once dispatched, your package is shipped via tracked worldwide
              delivery and arrives at your door within 10–14 business days.
            </div>
          </details>
        </div>

        {/* Question 4: Materials & Wear Durability / The Guarantee Objection */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                What is your 30-Day Keepsake Guarantee?
              </span>
              <span className="transition-transform duration-200 group-open:rotate-45 text-stone-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-xs leading-relaxed text-stone-600 max-w-xl transition-all">
              We stand behind our custom craftsmanship completely. If your
              pendant arrives damaged from shipping, or if the final engraved
              lines fail to accurately match the likeness of your uploaded pet
              photo, simply email us a photo of the item for an immediate free
              re-craft or a 100% refund.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
