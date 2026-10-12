import Image from "next/image";

const projects = [
  {
    title: "Whole-Home Remodeling",
    description:
      "Create a cohesive home that reflects your style and the way you live.",
    image: "/hero-house.webp",
    alt: "Contemporary home exterior with natural stone and warm lighting",
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Thoughtful layouts, natural materials, and spaces made for gathering.",
    image: "/hero-kitchen.webp",
    alt: "Warm contemporary kitchen with oak cabinetry and a central island",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Transform everyday routines with a calm, refined bathroom design.",
    image: "/hero-bathroom.webp",
    alt: "Contemporary bathroom with a freestanding tub and natural finishes",
  },
];

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="bg-[#F8F6F2] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14 text-center mx-auto">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#A87953]">
            Thoughtfully Reimagined
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#292A27] sm:text-4xl md:text-5xl">
            Spaces Designed Around You.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base md:ml-12">
            From considered details to complete transformations, create a home
            that feels unmistakably yours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8  md:grid-cols-3 md:gap-7">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-5 text-center">
                <h3 className="text-xl font-medium tracking-tight text-[#292A27]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-5 text-neutral-500 text-center">
          **Images are illustrative and used for demonstration purposes only.
          They do not represent completed projects by this company**.
        </p>

        <div className="mt-12 text-center sm:mt-14">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#A87953] px-7 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#916746] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A87953]"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
