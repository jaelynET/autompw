import Image from "next/image";

function ProductFeatures({ featureImages }) {
  // const{image_url,title,description,position}=featureImages;
  if (!featureImages?.length) return null;

  return (
    <section className="mt-14 border-t border-stone-200 pt-12">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-stone-900">
          Why Choose This Tub
        </h2>
      </div>

      {/* Feature Grid */}
      <div className="space-y-14">
        {featureImages.map((feature, index) => (
          <div
            key={feature.id}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center pb-14 border-b border-stone-200 ${
              index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div className="rounded-2xl bg-stone-50 p-6 md:p-8">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={feature.image_url}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div
              className={`max-w-lg px-3 md:px-6 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-medium text-stone-900">
                {feature.title}
              </h3>

              {feature.description && (
                <p className="mt-4 text-base text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductFeatures;
