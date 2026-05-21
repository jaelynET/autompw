import hero1 from "@/public/expand-1.png";
import hero2 from "@/public/expand-desktop.png";

import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    // Fixed non-standard height h-61 to h-64. Used max-w-7xl for large screen text containment.
    <div className="relative w-full h-64 sm:h-96 md:h-128 overflow-hidden">
      {/* Mobile Image */}
      <Image
        src={hero1}
        fill
        priority
        className="object-cover md:hidden"
        alt="White freestanding tub"
      />

      {/* Desktop Image - Changed object-contain to object-cover to avoid blank side spaces */}
      <Image
        src={hero2}
        fill
        priority
        className="hidden md:block object-cover"
        alt="White freestanding tub"
      />

      {/* Dark overlay for contrast. Changed from -to-t to -to-b for better top-down text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10">
        <div className="max-w-xl md:max-w-2xl space-y-3 md:space-y-4">
          {/* Title - Changed to white text for contrast */}
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Find the Perfect Tub for Your Space
          </h2>

          {/* Subtitle - Tailored font size per screen breakpoint */}
          <p className="text-xs sm:text-sm md:text-lg text-gray-200 max-w-md mx-auto leading-relaxed">
            Freestanding, flatbottom, soaking, and luxury tubs curated for real
            homes.
          </p>

          {/* Button - Improved padding and touch targets */}
          <div className="pt-2">
            <Link href="/collections/bathtubs/freestanding" passHref>
              <button className="inline-block rounded-md bg-button px-6 py-3 text-sm md:text-base font-bold text-white shadow-lg hover:brightness-110 transition-all active:scale-95">
                Shop Freestanding Tubs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
