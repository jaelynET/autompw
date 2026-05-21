"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

function CheckoutBtn() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  async function handleCheckout() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const text = await res.text(); // 👈 IMPORTANT DEBUG STEP

      console.log("RAW RESPONSE:", text);

      const data = JSON.parse(text);

      if (data.redirectTo) {
        window.location.href = data.redirectTo;
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setLoading(false);
      alert("Checkout failed");
    } catch (err) {
      setLoading(false);
      alert("Something went wrong");
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full rounded-md py-3 px-3 bg-button ${
        loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <p className="text-white">{loading ? "Processing..." : "Check out"}</p>
    </button>
  );
}

export default CheckoutBtn;
