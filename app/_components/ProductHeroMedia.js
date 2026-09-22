"use client";

import Image from "next/image";

export default function ProductHeroMedia({ uploadedImage }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden bg-stone-50 border border-stone-100">
      {/* If the customer hasn't uploaded a file, show the base studio product model mockup */}
      {!uploadedImage ? (
        <div className="relative w-full h-full">
          <Image
            src="/pet-necklace-model.webp"
            alt="AutoMpw Custom Jewelry Box Setup"
            fill
            priority
            fetchPriority="high"
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        /*
          🎯 THE HOOK TRAP: If they upload a picture, we display it directly.
          This visual validation halts comparison shopping completely.
        */
        <div className="relative w-full h-full flex items-center justify-center bg-stone-900 animate-fade-in">
          <Image
            src={uploadedImage}
            alt="Your Pet Custom Engraving Preview Layout"
            fill
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-contain"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/90 text-white font-mono text-[9px] px-2.5 py-1 uppercase tracking-widest backdrop-blur-sm shadow-sm">
            ✨ Previewing Engraving Profile
          </div>
        </div>
      )}

      {/* Decorative inner ambient frame layout */}
      <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-xl z-10" />
    </div>
  );
}
