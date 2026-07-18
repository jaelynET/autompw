"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google"; // 👈 Import Next.js helper

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    console.log("PurchaseTracking mounted");

    const orderId = "ORD-" + Date.now();
    const formattedAmount = amountTotal / 100;
    const formattedCurrency = currency.toUpperCase();

    console.log("Sending purchase via sendGAEvent");

    // 1. GA4 Purchase Event
    sendGAEvent({
      action: "purchase", // Next.js maps 'action' to the event name
      value: {
        transaction_id: orderId,
        value: formattedAmount,
        currency: formattedCurrency,
        debug_mode: true,
        items: [
          {
            item_id: "premium_access",
            item_name: "Stripe Production Purchase",
            price: formattedAmount,
            quantity: 1,
          },
        ],
      },
    });

    // 2. Google Ads Conversion
    sendGAEvent({
      action: "conversion",
      value: {
        send_to: `AW-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
        value: formattedAmount,
        currency: formattedCurrency,
        transaction_id: orderId,
      },
    });
  }, [amountTotal, currency]);

  return null;
}
