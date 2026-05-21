"use client";

import { useCart } from "@/app/_components/CartContext";
import { Suspense, useState, useTransition } from "react";
import CartItems from "./CartItems";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SpinnerMini from "./SpinnerMini";

function AddToCart({ product, selectedVariant }) {
  const { addToCart, setShowCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const { id, name, image, regularPrice, priceId } = product;

  const productData = {
    id: selectedVariant.id, // ID of the variant
    name: product.name,
    // Add these for the sub-labels
    size: selectedVariant.nominal_size,
    finish: selectedVariant.colorFinish,
    image: product.image || selectedVariant.image,
    regularPrice: selectedVariant.regularPrice,
    quantity,
  };

  return (
    <div className="relative ">
      <div className="flex gap-2 mx-4 ">
        <span className="text-grey-0 text-xs px-1 py-1 rounded-md   self-center min-[375px]:mx-5 min-[425px]:mx-7 ">
          Quantity:
        </span>
        <input
          type="number"
          min={1}
          className=" border border-grey-50 text-center  w-40 h-5 border-primary-400 rounded-sm py-3 px-3 mb-1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        />
      </div>
      <button
        type="button"
        disabled={!selectedVariant}
        onClick={() => addToCart(productData)}
        className="w-full max-w-md mx-auto block mt-4 py-3.5 px-6 font-bold text-base text-white text-center rounded-full bg-button hover:bg-[#4d4238] active:scale-[0.99] transition-all cursor-pointer uppercase"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
