"use client";
import { useState, useTransition } from "react";
import { useCart } from "./CartContext";

function AddToCartMini({ product }) {
  const { addToCart, setShowCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const { id, name, image, regularPrice } = product;

  const productData = {
    id,
    name,
    image,
    regularPrice,
    quantity,
  };
  return (
    <div>
      <button
        className="w-40 border border-button  py-1 px-1 cursor-pointer block mt-2  rounded-full "
        //onClick={addToCart(product)}
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await addToCart(productData);
            setShowCart(true);
          });
        }}
      >
        <p className="font-bold text-sm">
          {isPending ? "Adding..." : "Add to Cart"}
        </p>
      </button>
    </div>
  );
}

export default AddToCartMini;
