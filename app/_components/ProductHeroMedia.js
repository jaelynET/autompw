"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero-house.webp",
    mobileImage: "/hero-house-mobile.webp",
    alt: "Contemporary luxury home exterior",
    label: "Whole-Home Remodeling",
  },
  {
    image: "/hero-kitchen.webp",
    mobileImage: "/hero-kitchen-mobile.webp",
    alt: "Warm contemporary kitchen with natural wood cabinetry",
    label: "Kitchen Remodeling",
  },
  {
    image: "/hero-bathroom.webp",
    mobileImage: "/hero-bathroom-mobile.webp",
    alt: "Luxury bathroom with a freestanding bathtub",
    label: "Bathroom Remodeling",
  },
];

export default function ProductHeroMedia() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-[620px] sm:min-h-[680px] items-center overflow-hidden bg-neutral-900 md:min-h-[760px]">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <picture className="absolute inset-0 block">
            <source media="(max-width: 767px)" srcSet={slide.mobileImage} />

            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              aria-hidden="true"
              className="object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          {/* <div className="absolute inset-0 bg-black/10" /> */}
        </div>
      ))}

      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <div className="max-w-3xl text-white">
          <p className="hidden md:block mb-6 text-[10px] sm:text-xs font-medium uppercase tracking-[0.28em] text-white/80 md:text-sm">
            <span className="md:hidden">Thoughtfully designed spaces</span>
            <span className="hidden md:inline">
              Thoughtful Design · Exceptional Craftsmanship
            </span>
          </p>

          <h1 className="text-[2.5rem] font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
            Your Vision.
            <br />
            Beautifully Brought to Life.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7 text-white/85 md:text-lg md:leading-8">
            Thoughtfully designed spaces, expertly crafted around the way you
            want to live.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center justify-center bg-[#A87953] hover:bg-[#916746] px-7 py-4 text-sm font-medium text-white transition "
          >
            Request a Consultation
          </a>

          <p className="mt-8 text-sm text-white/80">
            {slides[activeSlide].label}
          </p>

          <div className="mt-5 flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.label} slide`}
                aria-pressed={activeSlide === index}
                className={`h-1 transition-all duration-300 ${
                  activeSlide === index
                    ? "w-10 bg-white"
                    : "w-5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
