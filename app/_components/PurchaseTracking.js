"use client";

import { useEffect } from "react";

export default function PurchaseTracking({ amountTotal, currency }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18204020684/NaIACLrR9cYcEMyfrehD",
        value: amountTotal / 100,
        currency: currency.toUpperCase(),
      });
    }
  }, [amountTotal, currency]);

  return null;
}
