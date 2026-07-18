"use client";

import { useEffect } from "react";

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    const orderId = "ORD-" + Date.now();
    const formattedAmount = amountTotal / 100;
    const formattedCurrency = currency.toUpperCase();

    const sendTrackingWhenReady = () => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        console.log("Dispatched clean events to GA4 and Google Ads");

        // This single call will now route to BOTH systems perfectly
        // because both IDs are loaded in your layout's gtag configuration
        window.gtag("event", "purchase", {
          transaction_id: orderId,
          value: formattedAmount,
          currency: formattedCurrency,
          debug_mode: true, // Forces display inside GA4 Admin > DebugView
          items: [
            {
              item_id: "premium_access",
              item_name: "Stripe Production Purchase",
              price: formattedAmount,
              quantity: 1,
            },
          ],
        });

        // Google Ads Conversion Target Specifier
        window.gtag("event", "conversion", {
          send_to: `AW-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
          value: formattedAmount,
          currency: formattedCurrency,
          transaction_id: orderId,
        });
      } else {
        setTimeout(sendTrackingWhenReady, 100);
      }
    };

    sendTrackingWhenReady();
  }, [amountTotal, currency]);

  return null;
}
