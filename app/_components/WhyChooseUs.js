import { PencilRuler, Hammer, MessagesSquare } from "lucide-react";

const benefits = [
  {
    title: "Thoughtful Design",
    description:
      "Every detail considered around your vision, lifestyle, and needs.",
    Icon: PencilRuler,
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Careful attention to materials, finishes, and the details that matter.",
    Icon: Hammer,
  },
  {
    title: "Clear Communication",
    description:
      "A collaborative process with clear expectations at every step.",
    Icon: MessagesSquare,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F6F2] px-5 py-20 sm:px-8 sm:py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#A87953]">
            The Difference
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-[#292A27] sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            A thoughtful approach to creating a home you’ll love.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {benefits.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE4DA]">
                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#A87953]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-xl font-medium tracking-tight text-[#292A27]">
                {title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
