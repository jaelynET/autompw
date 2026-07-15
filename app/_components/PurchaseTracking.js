"use client";

import { useEffect } from "react";

export default function PurchaseTracking({ session }) {
  useEffect(() => {
    window.gtag("event", "conversion", {
      send_to: "AW-XXXXXXXXX/XXXXXXXX",
      value: session.amount_total / 100,
      currency: session.currency.toUpperCase(),
    });
  }, [session]);

  return null;
}
