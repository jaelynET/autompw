import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="bg-[#F8F6F2] px-5 py-20 sm:px-8 sm:py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
          <Image
            src="/hero-kitchen.webp"
            alt="Warm contemporary interior with natural materials and refined finishes"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Company introduction */}
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#A87953]">
            Get to Know Us
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#292A27] sm:text-4xl md:text-5xl">
            A Better Way to Transform Your Home.
          </h2>

          <p className="mt-6 text-sm leading-7 text-neutral-600 sm:text-base">
            We believe a successful remodel begins with listening. Your goals,
            your style, and the way you live guide the vision from the first
            conversation through the final details.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
            Our approach centers on thoughtful planning, considered design, and
            a remodeling experience built around your needs.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-[#A87953] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#916746] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A87953]"
          >
            Let&apos;s Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
