import { useState, useEffect } from "react";

export default function ProductionCap() {
  const [slotsLeft, setSlotsLeft] = useState(7);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlotsLeft((prev) => (prev > 2 ? prev - 1 : prev));
    }, 45000);
    return () => clearTimeout(timer);
  }, [slotsLeft]);

  return (
    <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 my-4 flex items-center justify-between text-xs">
      {/* 🟢 Live Green Light explicitly signals "In Stock & Selling Fast" */}
      <div className="flex items-center gap-2 font-medium text-emerald-900 ">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-bold tracking-normal font-mono uppercase text-[10px] whitespace-nowrap">
          Selling Fast
        </span>
      </div>
      <p className="text-emerald-950 font-normal text-right leading-normal ">
        Only{" "}
        <strong className="bg-emerald-100 px-1.5 py-0.5 rounded font-bold font-mono text-emerald-950 text-[11px]">
          {slotsLeft} slots left
        </strong>{" "}
        today.{" "}
        <span className="underline decoration-emerald-400 font-bold inline  sm:mt-0 text-emerald-900 ">
          Secure yours below.
        </span>
      </p>
    </div>
  );
}
