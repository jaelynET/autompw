"use client";

import { useEffect, useRef } from "react";
import {
  sendGtagEvent,
  ADS_TRACKING_ID,
  GA_TRACKING_ID,
  CONVERSION_LABEL,
} from "../utils/gtag";

export default function PurchaseTracking({ amountTotal, currency }) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;

    const orderId = "ORD-" + Date.now();
    const formattedAmount = amountTotal ? amountTotal / 100 : 0;
    const formattedCurrency = currency ? currency.toUpperCase() : "USD";

    // 🚀 FIXED: Polling loop to wait for async scripts to be ready on the window
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const isFbqReady =
        typeof window !== "undefined" && typeof window.fbq === "function";
      const isGtagReady =
        typeof window !== "undefined" && typeof window.gtag === "function";

      if (isFbqReady || isGtagReady || attempts > 20) {
        clearInterval(interval);
        hasFired.current = true; // Mark as fired so it doesn't double-trigger

        // 1. Fire Meta Pixel Purchase
        if (isFbqReady) {
          window.fbq("track", "Purchase", {
            value: formattedAmount,
            currency: formattedCurrency,
            content_name: "Stripe Production Purchase",
            content_type: "product",
            content_ids: ["premium_access"],
            num_items: 1,
          });
        }

        // 2. Fire Google Tracking
        if (isGtagReady) {
          sendGtagEvent("purchase", {
            send_to: [
              GA_TRACKING_ID,
              `AW-${ADS_TRACKING_ID}/${CONVERSION_LABEL}`,
            ],
            transaction_id: orderId,
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
      }
    }, 200); // Checks every 200ms up to 4 seconds max

    return () => clearInterval(interval);
  }, [amountTotal, currency]);

  return null;
}
