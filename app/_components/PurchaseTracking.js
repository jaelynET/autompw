"use client";

import { useEffect } from "react";
("use client");

import { useEffect } from "react";

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    console.log("PurchaseTracking mounted");
    console.log("gtag:", window.gtag);

    if (!window.gtag) return;

    const orderId = "ORD-" + Date.now();
    const formattedAmount = amountTotal / 100;
    const formattedCurrency = currency.toUpperCase();

    console.log("Sending purchase");

    // GA4 Purchase Event
    window.gtag("event", "purchase", {
      transaction_id: orderId,
      value: formattedAmount,
      currency: formattedCurrency,
      items: [], // GA4 strictly requires an items array for purchase tracking
    });

    // Google Ads Conversion
    window.gtag("event", "conversion", {
      send_to: `AW-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
      value: formattedAmount,
      currency: formattedCurrency,
      transaction_id: orderId, // Recommended for Google Ads deduplication
    });
  }, [amountTotal, currency]);

  return null;
}
