"use client";

import { useState } from "react";
import ProductHeroMedia from "./ProductHeroMedia";
import CheckoutBtn from "./CheckoutBtn";
import FeatureBox from "./FeatureBox";

export default function ProductDetails({ product }) {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = [
    {
      id: "black",
      name: "Matte Black",
      class: "bg-stone-950",
    },
    {
      id: "white",
      name: "Monolith White",
      class: "bg-stone-100 border border-stone-300",
    },
  ];

  const selectedColorName =
    colors.find((c) => c.id === selectedColor)?.name || selectedColor;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans antialiased text-stone-900 bg-white selection:bg-stone-900 selection:text-white">
      {/* =========================================================
          ABOVE THE FOLD
      ========================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-4 md:pt-12">
        {/* PRODUCT MEDIA */}
        <div className="w-full lg:col-span-7">
          <div className="lg:sticky lg:top-8">
            <ProductHeroMedia product={product} selectedColor={selectedColor} />
          </div>
        </div>

        {/* CONVERSION PANEL */}
        <div className="w-full lg:col-span-5">
          <div className="lg:sticky lg:top-8">
            {/* PRODUCT IDENTITY */}
            <div className="pb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                SERIES 01 // DESK OBJECT
              </span>

              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-[-0.03em] leading-[0.95] text-stone-900">
                Magnetic Perpetual Calendar
              </h1>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-stone-600">
                A sculptural calendar designed to bring function and simplicity
                to the modern desk.
              </p>
            </div>

            {/* PRICE */}
            <div className="border-t border-stone-200 py-6">
              <div className="flex items-end justify-between">
                <span className="text-3xl sm:text-4xl font-light tracking-tight">
                  $49
                </span>

                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  One calendar
                </span>
              </div>
            </div>

            {/* FINISH */}
            <div className="border-t border-stone-200 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-stone-500">
                  Finish
                </span>

                <span className="text-xs text-stone-900">
                  {selectedColorName}
                </span>
              </div>

              <div
                className="flex items-center gap-5"
                role="radiogroup"
                aria-label="Choose calendar finish"
              >
                {colors.map((color) => {
                  const isSelected = selectedColor === color.id;

                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setSelectedColor(color.id)}
                      aria-checked={isSelected}
                      role="radio"
                      title={color.name}
                      className={`
                        h-7 w-7 rounded-full
                        transition-all duration-150
                        focus:outline-none
                        ${color.class}
                        ${
                          isSelected
                            ? "ring-1 ring-stone-950 ring-offset-4"
                            : "opacity-70 hover:opacity-100"
                        }
                      `}
                    />
                  );
                })}
              </div>
            </div>

            {/* PRICING / SHIPPING / OTHER PURCHASE INFO */}

            {/* PRIMARY CTA */}
            <div className="pt-1">
              <CheckoutBtn product={product} selectedColor={selectedColor} />
            </div>

            {/* SMALL TRUST / EXPECTATION ROW */}
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-stone-200 pt-5">
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-stone-500">
                  Designed for
                </span>

                <span className="block mt-1 text-xs text-stone-600">
                  Desk & workspace
                </span>
              </div>

              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-stone-500">
                  Function
                </span>

                <span className="block mt-1 text-xs text-stone-600">
                  Perpetual calendar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          PRODUCT STORY
      ========================================================== */}

      <section className="mt-24 md:mt-40 border-t border-stone-200 pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* LEFT */}
          <div className="md:col-span-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              THE OBJECT
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight leading-tight">
              A calendar worth leaving on display.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base md:text-lg leading-8 text-stone-600">
              Most calendars disappear into the background. This one is designed
              to be part of the space.
            </p>

            <p className="mt-5 text-base md:text-lg leading-8 text-stone-600">
              The magnetic markers give you a simple, tactile way to keep track
              of the date while the geometric form works naturally within modern
              desks, studios, offices, and interiors.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}

      <div className="mt-20 md:mt-28">
        <FeatureBox />
      </div>

      {/* =========================================================
          DETAILS
      ========================================================== */}

      <section className="mt-20 md:mt-28 border-t border-stone-200 pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              OBJECT DETAILS
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl font-light tracking-tight">
              Made to be seen.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="divide-y divide-stone-200 border-t border-stone-200">
              <div className="flex justify-between gap-8 py-4">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Finish
                </span>
                <span className="text-sm text-right">{selectedColorName}</span>
              </div>

              <div className="flex justify-between gap-8 py-4">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Function
                </span>
                <span className="text-sm text-right">Perpetual calendar</span>
              </div>

              {/* Replace these with your ACTUAL supplier specs */}

              <div className="flex justify-between gap-8 py-4">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Material
                </span>
                <span className="text-sm text-right">
                  {/* YOUR ACTUAL MATERIAL */}
                  ABS / Magnetic
                </span>
              </div>

              <div className="flex justify-between gap-8 py-4">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Dimensions
                </span>
                <span className="text-sm text-right">
                  {/* YOUR ACTUAL DIMENSIONS */}
                  25 x 20 x 15 cm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="mt-24 md:mt-36 border-t border-stone-200 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
            SERIES 01
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            Bring the date into the space.
          </h2>

          <p className="mt-5 text-sm md:text-base leading-7 text-stone-600 max-w-lg mx-auto">
            A functional object for desks, studios, offices and modern
            interiors.
          </p>

          <div className="mt-8 max-w-sm mx-auto">
            <CheckoutBtn product={product} selectedColor={selectedColor} />
          </div>
        </div>
      </section>
    </div>
  );
}
