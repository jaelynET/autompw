"use client";
import { useState } from "react";
import { useCart } from "./CartContext";
import Quantity from "./Quantity";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import { formatPrice } from "../utils/format";

function CartCard({ product }) {
  const { updateQuantity, deleteProduct } = useCart();
  const { id, name, image, regularPrice, quantity, size, finish } = product;

  return (
    <div className="w-full border-b border-stone-200 py-4 last:border-0">
      <div className="flex items-start justify-between gap-4">
        {/* --- IMAGE CONTAINER --- */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-stone-100 bg-stone-50 sm:h-28 sm:w-28">
          <Image
            src={image}
            className="object-cover transition-transform duration-300 hover:scale-105"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            alt={name}
            priority={false}
          />
        </div>

        {/* --- PRODUCT INFO & CONTROLS --- */}
        <div className="flex flex-1 flex-col gap-2">
          <div>
            <h3 className="text-sm font-semibold text-stone-900 line-clamp-2 leading-snug">
              {name}
            </h3>

            {/* Variant Information Badge Row */}
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
              <span className="bg-stone-100 px-2 py-0.5 rounded uppercase tracking-wider">
                {size}
              </span>
              <span className="text-stone-300">|</span>
              <span className="bg-stone-100 px-2 py-0.5 rounded uppercase tracking-wider">
                {finish}
              </span>
            </div>
          </div>

          {/* Pricing & Quantity Interactive Block */}
          <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
            {/* QUANTITY PICKER */}
            <div className="flex h-9 w-fit items-center overflow-hidden rounded-md border border-stone-300 bg-white shadow-sm focus-within:border-stone-500 focus-within:ring-1 focus-within:ring-stone-500">
              <button
                type="button"
                onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
                className="flex h-full items-center justify-center bg-stone-50 px-3 text-stone-600 transition-colors hover:bg-stone-100 active:bg-stone-200"
                aria-label="Decrease quantity"
              >
                <span className="text-base font-medium">−</span>
              </button>

              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val > 0) updateQuantity(id, val);
                }}
                className="w-10 bg-transparent text-center text-sm font-semibold text-stone-800 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="button"
                onClick={() => updateQuantity(id, quantity + 1)}
                className="flex h-full items-center justify-center bg-stone-50 px-3 text-stone-600 transition-colors hover:bg-stone-100 active:bg-stone-200"
                aria-label="Increase quantity"
              >
                <span className="text-base font-medium">+</span>
              </button>
            </div>

            {/* TOTAL PRICE */}
            <p className="text-sm font-bold text-stone-900 sm:text-base">
              {formatPrice(regularPrice * quantity)}
            </p>
          </div>
        </div>

        {/* --- ACTIONS / TRASH CAN --- */}
        <div className="flex shrink-0 justify-end pt-1">
          <button
            type="button"
            onClick={() => deleteProduct(id)}
            className="group rounded p-1.5 transition-colors hover:bg-red-50"
            aria-label={`Remove ${name} from cart`}
          >
            <TrashIcon className="h-5 w-5 text-stone-400 transition-colors group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
