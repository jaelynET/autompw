const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Tell us about your goals, ideas, and vision for your home.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Explore design possibilities, materials, scope, and project details.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description:
      "Bring the agreed-upon plan to life with care and attention to detail.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "Review the finished work and the details of your newly transformed space.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#A87953]">
            From Vision to Reality
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-[#292A27] sm:text-4xl md:text-5xl">
            Our Process
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            A clear path from your first conversation to your transformed space.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-t border-[#DED6CC] pt-5"
            >
              <>
                <span className="text-sm font-normal tracking-widest text-[#B8A18C]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-medium tracking-tight text-[#292A27]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {step.description}
                </p>
              </>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#A87953] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#916746] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A87953]"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
