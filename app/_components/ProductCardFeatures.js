function ProductCardFeatures({ features }) {
  return (
    <section className="mt-14 border-t border-stone-200 pt-12">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          Why Choose This Tub
        </h2>
        <p className="mt-3 text-sm md:text-base text-stone-800 max-w-2xl mx-auto leading-relaxed">
          Thoughtfully designed for comfort, durability, and a better soaking
          experience.
        </p>
      </div>

      {/* Stacked Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 md:p-7"
          >
            {/* Feature Title */}
            <h3 className="text-lg md:text-xl font-semibold text-stone-900">
              {feature.title}
            </h3>

            {/* Feature Description */}
            {feature.description && (
              <p className="mt-3 text-sm md:text-base text-stone-800 leading-relaxed">
                {feature.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProductCardFeatures;
