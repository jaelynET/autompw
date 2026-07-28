"use client";

import { useEffect } from "react";

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    const orderId = "ORD-" + Date.now();
    const formattedAmount = amountTotal / 100;
    const formattedCurrency = currency.toUpperCase();

    // Dispatch the Purchase event safely to the Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: formattedAmount,
        currency: formattedCurrency,
        content_name: "Stripe Production Purchase",
        content_type: "product",
        content_ids: ["premium_access"], // Keeps track of what was bought
        num_items: 1,
      });
    }
  }, [amountTotal, currency]);

  return null;
}
