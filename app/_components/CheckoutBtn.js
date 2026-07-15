"use client";
import { sendGtagEvent, ADS_TRACKING_ID } from "../utils/gtag";

import { useState } from "react";

function CheckoutBtn({ product }) {
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
      });

      const text = await res.text(); // 👈 IMPORTANT DEBUG STEP

      console.log("RAW RESPONSE:", text);

      const data = JSON.parse(text);

      if (data.url) {
        sendGtagEvent("add_to_cart", {
          value: product.pricing.price / 100,
          currency: "USD",
          items: [
            {
              id: product.specifications.mpn,
              name: product.title,
            },
          ],
        });

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
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full max-w-md mx-auto block mt-4 py-3.5 px-6 font-bold text-base text-center rounded-full bg-red-600 hover:bg-red-700  active:scale-[0.99] transition-all cursor-pointer uppercase mb-3 ${
        loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <p className="text-white">{loading ? "Processing..." : "Buy now"}</p>
    </button>
  );
}

export default CheckoutBtn;
