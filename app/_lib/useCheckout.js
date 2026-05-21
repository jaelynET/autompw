import { useState } from "react";
import { useCart } from "@/app/_components/CartContext"; // Adjust path

export function useCheckout() {
  const { cart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  async function performCheckout() {
    if (cart.length === 0) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Checkout failed");
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      alert("Something went wrong with checkout. Please try again.");
      setIsLoading(false);
    }
  }

  return { performCheckout, isLoading };
}
