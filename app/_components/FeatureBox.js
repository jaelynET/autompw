export default function FeatureBox() {
  const details = [
    {
      number: "01",
      title: "PERPETUAL",
      body: "No year to replace. Adjust the magnetic markers as the date changes and keep the same calendar year after year.",
    },
    {
      number: "02",
      title: "TACTILE",
      body: "The date is something you interact with rather than simply read. Move the magnetic markers by hand to update the calendar.",
    },
    {
      number: "03",
      title: "DISPLAY-WORTHY",
      body: "Designed to live in the open. Its sculptural form adds visual interest to desks, studios, offices and modern interiors.",
    },
  ];

  return (
    <section className="border-t border-stone-200 pt-16 md:pt-20 pb-4">
      {/* SECTION HEADER */}

      <div className="max-w-2xl">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
          WHY IT EXISTS
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight leading-tight">
          Function, without the visual clutter.
        </h2>

        <p className="mt-5 text-sm md:text-base leading-7 text-stone-600">
          A simple everyday tool reimagined as an object you actually want to
          keep on display.
        </p>
      </div>

      {/* FEATURE GRID */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-14 md:mt-16">
        {details.map((item) => (
          <div key={item.number} className="border-t border-stone-200 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-stone-500">
                {item.number}
              </span>

              <span className="h-px w-8 bg-stone-200" />
            </div>

            <h3 className="mt-8 text-xs font-mono font-medium uppercase tracking-[0.15em] text-stone-900">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-stone-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
