function FAQList() {
  return (
    <section className="mt-16 border-t border-stone-200 pt-12 mb-16">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          Everything you need to know about setting up and using your magnetic
          perpetual calendar.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {/* Question 1 */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none">
              <span className="font-bold text-stone-950 sm:text-lg">
                How do the calendar spheres work?
              </span>
              <span className="transition group-open:rotate-180 text-stone-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-4 text-sm leading-6 text-stone-600 border-t border-stone-100 pt-3">
              The calendar features embedded magnetic tracking lines. Small,
              textured steel spheres snap cleanly into designated slots along
              the outer frame, precisely marking the current month, numerical
              date, and day of the week.
            </div>
          </details>
        </div>

        {/* Question 2 */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none">
              <span className="font-bold text-stone-950 sm:text-lg">
                Does it require batteries or power cords?
              </span>
              <span className="transition group-open:rotate-180 text-stone-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-4 text-sm leading-6 text-stone-600 border-t border-stone-100 pt-3">
              No, this calendar is entirely manual and operates without any
              electronics. The core mechanisms rely completely on physical
              magnetism, meaning you will never have to charge it, replace
              batteries, or plug it into a wall.
            </div>
          </details>
        </div>

        {/* Question 3 */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none">
              <span className="font-bold text-stone-950 sm:text-lg">
                Do the magnetic spheres fall off easily?
              </span>
              <span className="transition group-open:rotate-180 text-stone-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-4 text-sm leading-6 text-stone-600 border-t border-stone-100 pt-3">
              Not at all. We engineered the tracking tracks with calibrated
              rare-earth magnets. The spheres glide smoothly when you
              intentionally move them with your fingers, but they lock firmly
              into place and won&apos;t dislodge if the desk is bumped or
              shaken.
            </div>
          </details>
        </div>

        {/* Question 4 */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between list-none">
              <span className="font-bold text-stone-950 sm:text-lg">
                Can this be mounted on a wall?
              </span>
              <span className="transition group-open:rotate-180 text-stone-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-4 text-sm leading-6 text-stone-600 border-t border-stone-100 pt-3">
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
