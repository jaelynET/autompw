"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Klarna from "@/public/Klarna.png";
// 2. UPDATED CHILD COMPONENT

function ProductVariant({ product, selectedVariant, setSelectedVariant }) {
  const variants = product.product_variants || [];

  // Derived state: Automatically calculate activeFinish from the parent state
  const activeFinish = selectedVariant?.colorFinish || variants[0]?.colorFinish;

  const uniqueFinishes = useMemo(() => {
    return [...new Set(variants.map((v) => v.colorFinish))];
  }, [variants]);

  const filteredVariants = useMemo(() => {
    return variants.filter((v) => v.colorFinish === activeFinish);
  }, [activeFinish, variants]);

  return (
    <div className="flex flex-col gap-6 p-5">
      {/* Removed duplicated local price display; parent handles it now */}

      {/* --- COLOR SELECTOR --- */}
      <div>
        <h3 className="text-sm font-bold uppercase mb-2">
          Finish: {activeFinish}
        </h3>
        <div className="flex gap-2">
          {uniqueFinishes.map((finish) => (
            <button
              key={finish}
              onClick={() => {
                const firstInColor = variants.find(
                  (v) => v.colorFinish === finish,
                );
                if (firstInColor) setSelectedVariant(firstInColor);
              }}
              className={`px-3 py-2 border text-sm transition ${
                activeFinish === finish
                  ? "border-black bg-black text-white"
                  : "border-stone-300"
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
      </div>

      {/* --- SIZE SELECTOR --- */}
      <div>
        <h3 className="text-sm font-bold uppercase mb-2">Size:</h3>
        <div className="flex gap-2 flex-wrap">
          {filteredVariants.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(v)}
              className={`border py-2 px-4 transition ${
                v.id === selectedVariant?.id
                  ? "border-amber-500 bg-amber-500 text-white shadow-sm"
                  : "border-stone-200 bg-white text-stone-700 hover:border-amber-400 hover:bg-amber-50/30"
              }`}
            >
              <span className="text-sm font-medium">{v.nominal_size}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductVariant;
