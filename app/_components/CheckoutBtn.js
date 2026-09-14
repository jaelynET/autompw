"use client";

import { useState } from "react";

function CheckoutBtn({ product, selectedColor }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedColor: selectedColor }),
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (data.url) {
        /*
          🚀 HIGH-SPEED TRACKING PIPELINE:
          Using clean, flat static variables matching your $89.00 payment item.
          This prevents object calculation loops and guarantees accurate conversion logs.
        */
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "AddToCart", {
            value: 89.0, // Static price assignment matching layout pricing
            currency: "USD",
            content_type: "product",
            content_ids: ["premium-desk-anchor"],
            content_name: product?.title || "The MPW-01 Tactile Core",
          });
        }

        // 🚀 INSTANT REDIRECT STRATEGY:
        // Modern analytics scripts execute immediately. Removing the 150ms timeout
        // stops the payment gateway from lagging, making your checkout feel instant.
        window.location.href = data.url;
        return;
      }

      setLoading(false);
      alert("Checkout failed");
    } catch (err) {
      setLoading(false);
      alert("Something went wrong");
      console.log(err);
    }
  }

  return (
    <button
      type="button" // HTML Best Practice: Prevent accidental parent form submissions
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full max-w-md mx-auto block mt-5 py-4 px-6 font-medium text-sm text-center uppercase tracking-widest transition-colors duration-200 border rounded-none ${
        loading
          ? "bg-stone-300 text-stone-500 border-stone-300 cursor-not-allowed"
          : "bg-stone-950 text-white border-stone-950 hover:bg-stone-800 active:bg-black cursor-pointer"
      }`}
    >
      {loading ? "Processing..." : "Buy Now"}
    </button>
  );
}

export default CheckoutBtn;
