"use client";

import { useState } from "react";

export default function ProductOptionsSection({ onSelectionChange }) {
  // 1. Initialize core option selectors
  const [selectedFinish, setSelectedFinish] = useState("Gold");
  const [pendantCount, setPendantCount] = useState(1);

  // 2. Derive dynamic pricing parameters on render loop
  const basePrice = 34.95;
  const upsellAmount =
    pendantCount === 2 ? 10.0 : pendantCount === 3 ? 20.0 : 0.0;
  const currentPrice = (basePrice + upsellAmount).toFixed(2);

  const handlePendantSelect = (count) => {
    setPendantCount(count);
    if (onSelectionChange) {
      onSelectionChange({
        finish: selectedFinish,
        count,
        price: basePrice + upsellAmount,
      });
    }
  };

  const handleFinishSelect = (finish) => {
    setSelectedFinish(finish);
    if (onSelectionChange) {
      onSelectionChange({
        finish,
        count: pendantCount,
        price: basePrice + upsellAmount,
      });
    }
  };

  return (
    <div>
      {/* Dynamic Price Indicator */}
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-3xl font-light tracking-tight text-stone-950 sm:text-4xl">
          ${currentPrice}
        </span>
        {/* 🌟 AUDIT FIX 1: Upgraded font-semibold to font-bold to guarantee text contrast on small mobile viewports */}
        <span className="text-sm font-mono uppercase tracking-wide text-green-700 bg-green-50 px-2.5 py-1 rounded font-bold">
          Free Shipping Included
        </span>
      </div>

      <div className="mt-6 border-t border-stone-100 pt-5 space-y-6">
        {/* Finish Selector */}
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-stone-500 font-mono block">
            Finish Choice
          </span>
          <div className="mt-3 flex gap-2 flex-wrap">
            {["Gold", "Rose Gold", "Steel"].map((color) => {
              const isActive = selectedFinish === color;
              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleFinishSelect(color)}
                  className={`px-4 py-2.5 text-xs border uppercase tracking-wider rounded-lg transition duration-150 ${
                    isActive
                      ? "border-stone-950 bg-stone-50 font-bold ring-1 ring-stone-950 text-stone-950"
                      : "border-stone-200 text-stone-600 font-medium hover:border-stone-400"
                  }`}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pendant Count Selector */}
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-stone-500 font-mono block">
            Number of Pendants
          </span>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((count) => {
              const isActive = pendantCount === count;
              const label = count === 1 ? "1 Pendant" : `${count} Pendants`;
              const pricingText =
                count === 1 ? "\$34.95" : count === 2 ? "+\$10.00" : "+\$20.00";

              const textStyles =
                count === 1 ? "text-stone-600" : "text-green-700 font-semibold";

              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => handlePendantSelect(count)}
                  className={`p-3 text-xs border rounded-xl text-center transition duration-150 ${
                    isActive
                      ? "border-stone-950 bg-stone-50/50 font-bold ring-1 ring-stone-950 text-stone-950"
                      : "border-stone-200 text-stone-600 font-medium hover:border-stone-400"
                  }`}
                >
                  {label}
                  <span
                    className={`block text-xs mt-0.5 ${isActive ? "text-stone-950 font-bold" : textStyles}`}
                  >
                    {pricingText}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
