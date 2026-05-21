// app/_components/ShoppingCart.js
import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "./CartContext";
import CartItems from "./CartItems";

export default function ShoppingCart() {
  const { cart, setShowCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative">
      <ShoppingCartIcon
        className="w-6 h-6 hover:text-main cursor-pointer transition-colors mr-3 text-icon"
        onClick={() => setShowCart((show) => !show)}
      />

      {/* Keep the notification badge conditional on isClient */}
      {isClient && cart.length > 0 && (
        <span className="rounded-full bg-red-500 w-[0.675rem] h-[0.675rem] z-10 absolute top-0 right-0"></span>
      )}

      {/* REMOVE the isClient guard from here so the outer structural container renders on the server */}
      <CartItems />
    </div>
  );
}
