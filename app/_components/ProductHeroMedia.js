"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ProductHeroMedia({ product, selectedColor }) {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = product?.gallery || [];

  const filteredGallery = galleryItems.filter(
    (item) => item.color?.toLowerCase() === selectedColor?.toLowerCase(),
  );

  useEffect(() => {
    setActiveIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 });
    }
  }, [selectedColor]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth === 0) return;

    const newIndex = Math.round(scrollLeft / clientWidth);
    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < filteredGallery.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToImage = (index) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;

    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  if (!filteredGallery.length) {
    return (
      <div className="w-full aspect-square bg-stone-100 animate-pulse md:rounded-sm" />
    );
  }

  return (
    <div className="flex flex-col md:flex-row-reverse gap-4 w-full">
      {/*
        MAXIMUM IMMERSIVE MOBILE DISPLAY CONTAINER
        -mx-4 breaks the image box out to the exact pixel edges of mobile screens.
        md:mx-0 restores the clean grid boundaries on desktop monitors.
        md:rounded-sm ensures the precision bevel only shows when framed on desktop.
      */}
      <div className="flex-1 relative aspect-square overflow-hidden bg-stone-50 border-b border-stone-200 md:border  group -mx-4 md:mx-0">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory touch-pan-x overscroll-x-contain scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              className="relative w-full h-full flex-shrink-0 snap-start snap-always"
            >
              <Image
                src={item.image}
                alt={item.alt || "Product View"}
                fill
                priority={idx === 0}
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Desktop Navigation Chevrons */}
        {filteredGallery.length > 1 && (
          <>
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() => scrollToImage(activeIndex - 1)}
              className={`hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-stone-900 transition-all z-20 ${
                activeIndex === 0
                  ? "opacity-0 pointer-events-none"
                  : "opacity-30 hover:opacity-100"
              }`}
            >
              ⟨
            </button>
            <button
              type="button"
              disabled={activeIndex === filteredGallery.length - 1}
              onClick={() => scrollToImage(activeIndex + 1)}
              className={`hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-stone-900 transition-all z-20 ${
                activeIndex === filteredGallery.length - 1
                  ? "opacity-0 pointer-events-none"
                  : "opacity-30 hover:opacity-100"
              }`}
            >
              ⟩
            </button>
          </>
        )}
      </div>

      {/* DESKTOP ONLY: INDUSTRIAL THUMBNAILS (Docks left side of image) */}
      {filteredGallery.length > 1 && (
        <div
          className="hidden md:flex flex-col gap-3 w-16 shrink-0"
          role="tablist"
          aria-label="Gallery Selectors"
        >
          {filteredGallery.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              onClick={() => scrollToImage(idx)}
              className={`relative aspect-square w-full overflow-hidden bg-stone-50 border rounded-sm transition-all duration-150 focus:outline-none ${
                activeIndex === idx
                  ? "border-stone-950 ring-1 ring-stone-950"
                  : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* MOBILE ONLY: CLEAN MINIMAL CAPSULE DOTS */}
      {filteredGallery.length > 1 && (
        <div className="flex md:hidden items-center justify-center gap-2 pt-1 w-full h-4">
          {filteredGallery.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToImage(idx)}
              className={`block h-1.5 rounded-full transition-all duration-200 focus:outline-none ${
                activeIndex === idx ? "w-6 bg-stone-900" : "w-1.5 bg-stone-300"
              }`}
              style={{ minWidth: activeIndex === idx ? "24px" : "6px" }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
