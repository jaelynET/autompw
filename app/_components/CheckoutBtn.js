"use client";
import {
  sendGtagEvent,
  ADS_TRACKING_ID,
  GA_TRACKING_ID
  CONVERSION_LABEL,
} from "../utils/gtag";

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
        // Track the Facebook Pixel InitiateCheckout or AddToCart event safely
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "AddToCart", {
            value: product.pricing.price / 100,
            currency: "USD",
            content_type: "product",
            content_ids: [product.specifications.mpn],
            content_name: product.title,
          });
        }
        // 2. Google Analytics 4 (GA4) & Google Ads Tracking
        if (
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          sendGtagEvent("add_to_cart", {
            send_to: [GA_TRACKING_ID,`AW-${ADS_TRACKING_ID}/${CONVERSION_LABEL}`], // Directs event to your Google Ads pixel
            value: product.pricing.price / 100,
            currency: "USD",
            items: [
              {
                item_id: product.specifications.mpn,
                item_name: product.title,
                price: product.pricing.price / 100,
                quantity: 1,
              },
            ],
          });
        }
        //WAIT exactly 150 miliseconds so the browser can send the network request before redirecting
        setTimeout(() => {
          window.location.href = data.url;
        }, 150);
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
      <span className="text-white">
        {loading ? "Processing..." : "Buy now"}
      </span>
    </button>
  );
}

export default CheckoutBtn;
