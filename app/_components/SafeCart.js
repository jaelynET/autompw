// app/_components/SafeCart.js
"use client";

import dynamic from "next/dynamic";

// This completely forces Next.js to load the cart ONLY on the client browser.
// No server rendering, no hydration mismatches, no errors.
const DynamicCart = dynamic(() => import("./ShoppingCart"), {
  ssr: false,
});

export default function SafeCart() {
  return <DynamicCart />;
}
