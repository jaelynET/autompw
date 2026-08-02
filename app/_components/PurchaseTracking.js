"use client";

import { useEffect } from "react";
import {
  sendGtagEvent,
  ADS_TRACKING_ID,
  CONVERSION_LABEL,
} from "../utils/gtag";

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
    // 2. Google Analytics 4 & Google Ads Purchase Event
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      sendGtagEvent("purchase", {
        send_to: `AW-${ADS_TRACKING_ID}/${CONVERSION_LABEL}`,
        // Routes data directly to Google Ads conversion pixel
        transaction_id: orderId, // Crucial for deduplication and matching
        value: formattedAmount,
        currency: formattedCurrency,
        items: [
          {
            item_id: "premium_access",
            item_name: "Stripe Production Purchase",
            price: formattedAmount,
            quantity: 1,
          },
        ],
      });
    }
  }, [amountTotal, currency]);

  return null;
}
