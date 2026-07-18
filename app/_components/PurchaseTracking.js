"use client";

import { useEffect } from "react";

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    if (!window.gtag) return;

    const orderId = "ORD-" + Date.now();

    // GA4 Purchase Event
    window.gtag("event", "purchase", {
      transaction_id: orderId,
      value: amountTotal / 100,
      currency: currency.toUpperCase(),
    });

    // Google Ads Conversion
    window.gtag("event", "conversion", {
      send_to: `AW-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
      value: amountTotal / 100,
      currency: currency.toUpperCase(),
    });
  }, [amountTotal, currency]);

  return null;
}
