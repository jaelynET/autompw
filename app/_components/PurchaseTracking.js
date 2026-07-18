"use client";

import { useEffect } from "react";
import { sendGtagEvent } from "../utils/gtag";

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    const orderId = "ORD-" + Date.now();
    const formattedAmount = amountTotal / 100;
    const formattedCurrency = currency.toUpperCase();

    // 1. Dispatch the e-commerce payload to GA4 via your working wrapper
    sendGtagEvent("purchase", {
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

    // 2. Dispatch the Google Ads Conversion via your working wrapper
    sendGtagEvent("conversion", {
      send_to: `AW-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
      value: formattedAmount,
      currency: formattedCurrency,
      transaction_id: orderId,
    });
  }, [amountTotal, currency]);

  return null;
}
