export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 min-[375px]:px-8 min-[425px]:px-11 py-16 md:py-24 font-sans bg-white text-stone-950">
      {/* 1. Brand Concept Hero */}
      <section className="mb-16">
        <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400 font-mono block mb-3">
          The Manifesto
        </span>
        <h1 className="text-2xl font-normal tracking-tight text-stone-950 sm:text-3xl md:text-4xl leading-tight mb-6">
          Manipulating Space and Kinetic Rhythm
        </h1>

        <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-2xl font-normal">
          AutoMPW operates at the intersection of structural engineering and
          minimalist spatial art. We view objects not merely as tools, but as
          tactile artifacts that dictate the behavioral landscape of a modern
          studio space. By harnessing the silent, continuous laws of physical
          magnetism, we design interactive desktop installations that replace
          electronic noise with intentional physical rituals.
        </p>
      </section>

      {/* 2. Core Philosophy Columns */}
      <section className="mb-16 border-t border-stone-100 pt-10">
        <h2 className="text-[10px] font-medium uppercase tracking-widest text-stone-400 font-mono mb-6">
          Architectural Principles
        </h2>

        <div className="space-y-4 font-sans max-w-2xl">
          <div className="flex items-start gap-4 text-xs font-normal tracking-wide text-stone-600">
            <span className="h-1.5 w-1.5 bg-stone-950 rounded-none block mt-1.5 shrink-0" />
            <p>
              <strong className="text-stone-950 font-medium">
                Kinetic Equilibrium:
              </strong>{" "}
              Objects engineered around raw magnetic paths, moving seamlessly
              without power cords, ports, or batteries.
            </p>
          </div>

          <div className="flex items-start gap-4 text-xs font-normal tracking-wide text-stone-600">
            <span className="h-1.5 w-1.5 bg-stone-400 rounded-none block mt-1.5 shrink-0" />
            <p>
              <strong className="text-stone-950 font-medium">
                Geometric Restraint:
              </strong>{" "}
              Sharp structural dimensions, pure material block finishes, and a
              complete elimination of arbitrary visual ornamentation.
            </p>
          </div>

          <div className="flex items-start gap-4 text-xs font-normal tracking-wide text-stone-600">
            <span className="h-1.5 w-1.5 bg-stone-400 rounded-none block mt-1.5 shrink-0" />
            <p>
              <strong className="text-stone-950 font-medium">
                Domestic Integrity:
              </strong>{" "}
              Every architectural layout allocation is backed by complimentary
              domestic transit, real-time insured delivery, and studio
              verification.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Curator Inquiries & Support */}
      <section className="border-t border-stone-100 pt-10 font-sans">
        <h2 className="text-[10px] font-medium uppercase tracking-widest text-stone-400 font-mono mb-4">
          Studio Inquiries
        </h2>

        <p className="text-xs text-stone-500 max-w-md leading-relaxed">
          For configuration assistance, placement parameters, or order registry
          updates, communicate directly with our concierge team.
        </p>

        <div className="mt-6 space-y-2 text-xs font-mono tracking-wide text-stone-800">
          <div className="flex items-center gap-3">
            <span className="text-stone-400 font-normal">Email:</span>
            <a
              href="mailto:support@autompw.com"
              className="hover:text-stone-950 underline underline-offset-2"
            >
              support@autompw.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400 font-normal">Studio line:</span>
            <span>510-977-0587</span>
          </div>
        </div>
      </section>
    </main>
  );
}
