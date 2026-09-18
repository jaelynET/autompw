"use client";

import { useState } from "react";

export default function CheckoutBtn({
  product,
  uploadedImage,
  engravingText,
  variantConfig,
}) {
  const [loading, setLoading] = useState(false);

  // Fallback defaults to protect rendering loops
  const finish = variantConfig?.finish || "Gold";
  const count = variantConfig?.count || 1;
  const price = variantConfig?.price || 34.95;

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
          selectedFinish: finish,
          pendantCount: count,
          engravingText: engravingText || "None",
          // Note: Keep actual file uploads handled via Post-Purchase webhooks
          // or simple temporary blob references to minimize network payloads!
        }),
      });

      const data = await res.json();

      if (data.url) {
        /*
          🚀 HIGH-SPEED META PIXEL TRACKING PIPELINE:
          Fires immediately using dynamic cart value totals without timeouts.
        */
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "AddToCart", {
            value: Number(price),
            currency: "USD",
            content_type: "product",
            content_ids: [`custom-pet-necklace-${count}p`],
            content_name: `AutoMPW Custom Pet Necklace - ${count} Pendants`,
          });
        }

        // 🚀 INSTANT REDIRECT STRATEGY
        window.location.href = data.url;
        return;
      }

      setLoading(false);
      alert("Checkout session compilation failed");
    } catch (err) {
      setLoading(false);
      alert("Something went wrong with the payment link initialization");
      console.error(err);
    }
  }

  // 🎯 HIGH-CONVERTING CUSTOM STATUS TEXT MACHINE
  const getButtonText = () => {
    if (!uploadedImage) return "⚠️ Upload Pet Photo Above";
    if (loading) return "🔒 Securing Your Custom Slot...";
    return "Secure Your Custom Keepsake";
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading || !uploadedImage}
      className={`w-full max-w-md mx-auto block mt-5 py-4 px-6 font-bold text-xs text-center uppercase tracking-widest transition-all duration-150 border rounded-xl shadow-md ${
        loading || !uploadedImage
          ? "bg-stone-200 text-stone-500 border-stone-200 cursor-not-allowed"
          : "bg-stone-950 text-white border-stone-950 hover:bg-stone-800 active:scale-[0.99] cursor-pointer"
      }`}
    >
      {getButtonText()}
    </button>
  );
}
