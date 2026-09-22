import Image from "next/image";

export default function FeatureBox() {
  return (
    <section className="mt-16 md:mt-24 font-sans border-t border-stone-100 pt-12">
      {/* 1. Main Heading — Stripped of text clutter */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-stone-950 sm:text-2xl">
          Keep Your Best Friend Close
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-stone-600 font-normal">
          Our custom pendant transforms your favorite smartphone picture into a
          permanently engraved metallic keepsake you can carry everywhere.
        </p>
      </div>

      {/* 🌟 VISUAL FIRST INTERFACE: The image now breathes perfectly without text walls choking it */}
      <div className="w-full max-w-[480px] mx-auto mb-12 overflow-hidden rounded-xl border border-stone-100 bg-stone-50 shadow-sm aspect-square relative">
        <Image
          src="/pet-necklace-hero.webp"
          alt="AutoMpw Custom Pet Pendant Neckline Detail"
          fill
          priority
          sizes="(max-w-480px) 100vw, 480px"
          className="object-contain block"
        />
      </div>

      {/* 2. Technical Features Matrix — Quick Fragments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-stone-100 pt-8">
        {/* Block 1: Artwork Precision */}
        <div className="space-y-2">
          <h3 className="font-bold text-sm tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-950 block rounded-none flex-shrink-0" />
            Artisan Laser Engraving
          </h3>
          <p className="text-sm leading-relaxed text-stone-600 pl-3.5 max-w-sm">
            Our machine processes follow the exact details of your photo upload,
            rendering high-contrast outlines that capture your pet&apos;s true
            likeness and personality.
          </p>
        </div>

        {/* Block 2: Durable Waterproofing */}
        <div className="space-y-2">
          <h3 className="font-bold text-sm tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-950 block rounded-none flex-shrink-0" />
            100% Shower Proof Design
          </h3>
          <p className="text-sm leading-relaxed text-stone-600 pl-3.5 max-w-sm">
            Built using marine-grade stainless steel coated in durable 18k gold
            plating. It is entirely waterproof, hypoallergenic, and will never
            turn your skin green.
          </p>
        </div>

        {/* Block 3: Everyday Styling */}
        <div className="space-y-2">
          <h3 className="font-bold text-sm tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-950 block rounded-none flex-shrink-0" />
            Comfortable Daily Wear
          </h3>
          <p className="text-sm leading-relaxed text-stone-600 pl-3.5 max-w-sm">
            Featuring an optimized, lightweight pendant profile resting on a
            smooth link chain designed to sit beautifully next to any outfit.
          </p>
        </div>

        {/* Block 4: Hardcore Durability */}
        <div className="space-y-2">
          <h3 className="font-bold text-sm tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-950 block rounded-none flex-shrink-0" />
            Tarnish-Free Guarantee
          </h3>
          <p className="text-sm leading-relaxed text-stone-600 pl-3.5 max-w-sm">
            Unlike cheap fashion items that scratch or fade in weeks, our metal
            blends are mixed to resist daily surface friction and sweat
            indefinitely.
          </p>
        </div>
      </div>
    </section>
  );
}
