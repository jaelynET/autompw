function FAQList() {
  return (
    <section className="mt-20 border-t border-stone-200 pt-12 mb-20 font-sans mx-4 min-[375px]:mx-8 min-[425px]:mx-11">
      {/* Section Heading - Balanced and Clean */}
      <div className="mb-10">
        <h2 className="text-xl font-normal tracking-tight text-stone-950 sm:text-2xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-stone-500 font-normal">
          Technical specifications, configuration parameters, and spatial
          mounting details.
        </p>
      </div>

      {/* FAQ Accordion List - Converted into an Architectural Row System */}
      <div className="divide-y divide-stone-100 border-t border-b border-stone-100">
        {/* Question 1 */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                How do the calendar spheres work?
              </span>
              <span className="transition-transform duration-200 group-open:rotate-45 text-stone-400">
                {/* Minimal cross '+' icon that transforms into an 'x' on open */}
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
              The calendar features embedded magnetic tracking lines. Small,
              textured steel spheres snap cleanly into designated slots along
              the outer frame, precisely marking the current month, numerical
              date, and day of the week.
            </div>
          </details>
        </div>

        {/* Question 2 */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Does it require batteries or power cords?
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
              No, this calendar is entirely manual and operates without any
              electronics. The core mechanisms rely completely on physical
              magnetism, meaning you will never have to charge it, replace
              batteries, or plug it into a wall.
            </div>
          </details>
        </div>

        {/* Question 3 */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Do the magnetic spheres fall off easily?
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
              Not at all. We engineered the tracks with calibrated rare-earth
              magnets. The spheres glide smoothly when you intentionally move
              them with your fingers, but they lock firmly into place and
              won&apos;t dislodge if the desk is bumped or shaken.
            </div>
          </details>
        </div>

        {/* Question 4 */}
        <div className="py-5 bg-transparent">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none outline-none">
              <span className="text-sm font-medium text-stone-950 tracking-wide">
                Can this be mounted on a wall?
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
              Yes. The calendar features an integrated flush-mount keyhole slot
              on the rear panel. It can easily hang flat against any wall
              surface using a standard drywall screw, or sit stably on a desktop
              using its removable bottom stand.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQList;
