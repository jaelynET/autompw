function FAQList() {
  return (
    <section className="mt-20 border-t border-stone-200 pt-12 mb-20 font-sans mx-4 min-[375px]:mx-8 min-[425px]:mx-11">
      {/* Section Heading — Clean, Balanced and Technical */}
      <div className="mb-10">
        <h2 className="text-xl font-normal tracking-tight text-stone-950 sm:text-2xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-stone-500 font-normal">
          Mechanical specifications, tactile operation parameters, and acoustic
          details.
        </p>
      </div>

      {/* FAQ Accordion List — Minimalist Architectural Divider Stack */}
      <div className="divide-y divide-stone-100 border-t border-b border-stone-100">
        {/* Question 1: Core Mechanical Operation */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                How does the sliding mechanism work?
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
            <div className="mt-3 text-xs leading-relaxed text-stone-500 max-w-xl transition-all">
              The slider is built using two precision-machined steel plates with
              powerful magnets hidden inside them. When you push the top card
              with your thumb, the internal magnetic tracks pull and resist
              against each other, snapping perfectly into place like a real deck
              of cards.
            </div>
          </details>
        </div>

        {/* Question 2: The Sound / Stealth Objection Handle */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Will the clicking sound disturb others in a quiet office?
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
            <div className="mt-3 text-xs leading-relaxed text-stone-500 max-w-xl transition-all">
              When slid freely, the steel plates create a crisp, solid
              mechanical click that is highly satisfying for home workspace
              focus. If you need to use it in a quiet meeting or shared office
              space, simply wrap your fingers a bit firmer around the metal
              edges to dampen the impact, converting it into a totally silent,
              stealthy vibration.
            </div>
          </details>
        </div>

        {/* Question 3: Power Requirements */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Does it require batteries or maintenance?
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
            <div className="mt-3 text-xs leading-relaxed text-stone-500 max-w-xl transition-all">
              No. This tool is completely mechanical and operates without any
              wires, charging, or electronics. The core system relies entirely
              on permanent physical magnetism, meaning it will never lose its
              snap or require spare parts.
            </div>
          </details>
        </div>

        {/* Question 4: Materials & Wear Durability */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Will the steel plates scratch or wear down over time?
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
            <div className="mt-3 text-xs leading-relaxed text-stone-500 max-w-xl transition-all">
              Not at all. The slider is machined from heavy, solid stainless
              steel alloy and treated with a raw sandblasted finish. It is
              highly resistant to surface scratches, impact damage, and drop
              wear, ensuring it maintains its pristine metal appearance directly
              on your desk for years.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQList;
