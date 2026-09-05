import Image from "next/image";

function FeatureBox() {
  return (
    <section className="mt-20 mx-4 min-[375px]:mx-8 min-[425px]:mx-11 font-sans border-t border-stone-100 pt-12">
      {/* Section Heading - Clean & Authoritative */}
      <div className="mb-12">
        <h2 className="text-xl font-normal tracking-tight text-stone-950 sm:text-2xl">
          A Modern Take on Time
        </h2>
        <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-stone-500 font-normal">
          Designed to break the mold of traditional desk setups. Explore the
          functional mechanics and geometric parameters that make this
          interactive perpetual calendar a timeless masterpiece.
        </p>
      </div>

      {/* Technical Features Matrix (No images required, looks like a gallery archive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-stone-100 pt-10">
        {/* Block 1 */}
        <div className="space-y-3">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-950 block rounded-none" />
            Perpetual Magnetic Design
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Utilizes calibrated magnetic pathways that guide the tracking
            spheres to display the month, day, and date perfectly without the
            need for external battery power or electronics.
          </p>
        </div>

        {/* Block 2 */}
        <div className="space-y-3">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-400 block rounded-none" />
            Sleek Minimalist Aesthetic
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Finished with a non-reflective matte coating and sharp, geometric
            intersections designed to complement modern workspaces, creative
            home studios, and exhibition desks.
          </p>
        </div>

        {/* Block 3 */}
        <div className="space-y-3">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-400 block rounded-none" />
            Spatial Mounting
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Features an integrated, flush keyhole slot on the rear panel for
            flat wall mounting, or rests securely on solid surfaces using the
            included matching weighted steel base.
          </p>
        </div>

        {/* Block 4 */}
        <div className="space-y-3">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-400 block rounded-none" />
            Tactile Ritual
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Transforms the cold action of glancing at a phone display into a
            physical, grounding morning ritual of shifting the spheres along the
            hand-inked day tracking ring.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureBox;
