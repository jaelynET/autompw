"use client";

import { useState } from "react";

export default function CheckoutBtn({ product, selectedColor = "black" }) {
  const [loading, setLoading] = useState(false);
  const fixedPrice = 49.0;

  async function handleCheckout() {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedFinish: selectedColor,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Checkout initialization failed");
      }

      if (!data.url) {
        throw new Error("No checkout URL returned");
      }

      // High-Speed Meta Pixel Tracking Implementation
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "InitiateCheckout", {
          value: fixedPrice,
          currency: "USD",
          content_type: "product",
          content_ids: [`magnetic-perpetual-calendar-${selectedColor}`],
          content_name: `Magnetic Perpetual Calendar - ${selectedColor}`,
        });
      }

      
      window.location.href = data.url;
    } catch (err) {
      console.error("Payment initialization error:", err);
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={` w-full py-4 px-6 font-mono font-medium text-xs text-center uppercase tracking-[0.16em] transition-all duration-150 border rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 ${loading ? "bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed" : "bg-stone-900 text-white border-stone-900 hover:bg-stone-800 active:bg-stone-950 cursor-pointer"} `}
    >
      {" "}
      {loading ? "Processing Order..." : "Get the Calendar"}{" "}
    </button>
  );
}
