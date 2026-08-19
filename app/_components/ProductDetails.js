"use client";

import { useState, useEffect } from "react";
import { sendGtagEvent, ADS_TRACKING_ID } from "../utils/gtag";
import { formatPrice } from "../utils/format";
import Image from "next/image";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import EstimateArrival from "./EstimateArrival";
import AddToCart from "./AddToCart";
import KlarnaMessage from "./KlarnaMessage";
import ExpandableSection from "./ExpandableSection";
import ProductSpecs from "./ProductSpecs";

import ProductDimensions from "./ProductDimensions";
import ProductInstallDocs from "./ProductInstallDocs";
import ProductVariant from "./ProductVariant";

import CheckoutBtn from "./CheckoutBtn";
import FAQList from "./FAQList";
import Reviews from "./Reviews";
import ProductImages from "./ProductImages";

function ProductDetails({ product }) {
  const {
    title,
    gallery: productImages,
    product_title_seo,
    pricing,
    description,
    sellingPoints,
  } = product;
  const [selectedColor, setSelectedColor] = useState("red");

  const image1 = "/gray-porsche-2.jpg";

  return (
    <div className="md:grid md:grid-cols-2 md:mt-8 md:ml-30 ">
      <ProductImages
        mainImage={image1}
        productImages={productImages}
        selectedColor={selectedColor}
      />
      <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 ">
        <div>
          <div className="mt-4 w-full rounded-xl border border-stone-200 bg-stone-50/50 p-5 sm:p-6">
            {/* Price */}
            <div>
              <span className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl md:text-4xl">
                {formatPrice(pricing.price)}
              </span>
            </div>
            {/* Interactive Premium Variant Selector */}
            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Select Finish
              </span>
              <div className="mt-2 flex gap-3">
                {/* Guards Red Button */}
                <button
                  type="button"
                  onClick={() => setSelectedColor("red")}
                  className={`flex items-center gap-2 rounded-full border py-1.5 pl-2 pr-3 text-xs font-semibold transition ${
                    selectedColor === "red"
                      ? "border-stone-900 bg-stone-950 text-white"
                      : "border-stone-200 bg-white text-stone-950 hover:border-stone-400"
                  }`}
                >
                  <span className="h-3.5 w-3.5 rounded-full bg-red-600 border border-black/10 block" />
                  Guards Red
                </button>

                {/* Crayon Gray Button */}
                <button
                  type="button"
                  onClick={() => setSelectedColor("gray")}
                  className={`flex items-center gap-2 rounded-full border py-1.5 pl-2 pr-3 text-xs font-semibold transition ${
                    selectedColor === "gray"
                      ? "border-stone-900 bg-stone-950 text-white"
                      : "border-stone-200 bg-white text-stone-950 hover:border-stone-400"
                  }`}
                >
                  <span className="h-3.5 w-3.5 rounded-full bg-stone-400 border border-black/10 block" />
                  Crayon Gray
                </button>
              </div>
            </div>

            {/* Klarna */}
            <div className="mt-3 min-h-[40px] w-full">
              <KlarnaMessage amount={pricing.price} />
            </div>

            {/* Buy button */}
            <div className="mt-4">
              <CheckoutBtn product={product} selectedColor={selectedColor} />
            </div>

            {/* Premium Trust & Reassurance Points */}
            <div className="mt-5 border-t border-stone-200 pt-4 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-700">
                <svg
                  className="h-4 w-4 text-stone-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>In Stock · Ships in 1-2 business days</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-700">
                <svg
                  className="h-4 w-4 text-stone-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>100% Insured Delivery with Real-Time Tracking</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-700">
                <svg
                  className="h-4 w-4 text-stone-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 3.89L21 13.91"
                  />
                </svg>
                <span>30-Day Money-Back Guarantee Included</span>
              </div>
            </div>
          </div>

          {/* <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl leading-tight ">
          {title}
        </h1> */}

          {/* <div className="mt-3 flex flex-col gap-1 ">
          <div>
            <span className="text-2xl font-black text-stone-950 sm:text-3xl md:text-4xl tracking-tight">
              {formatPrice(pricing.price)}
            </span>

            {/* <span className="ml-2 text-lg text-stone-500 line-through">
              {formatPrice(pricing.compareAt)}
            </span> */}
        </div>
        <section className="mt-12">
          {/* Section Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl">
              <span className="block sm:inline">
                Experience the Extraordinary
              </span>{" "}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
              Designed to grab attention from the moment it starts floating.
              Explore what makes this levitating display truly stand out.
            </p>
          </div>

          {/* Features Rows Container */}
          <div className="space-y-6">
            {/* Row 1: Image Left, Features Right */}
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              {/* Image Block */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 h-[320px] md:h-auto md:w-1/2 min-h-[280px]">
                <Image
                  src="/desk-image.png"
                  alt="Magnetic levitating car floating close-up"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Features Block */}
              <div className="flex w-full flex-col justify-center rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 md:w-1/2 space-y-6">
                <div>
                  <h3 className="font-bold text-stone-950">Defies Gravity</h3>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">
                    Magnetically suspended above the base, the car appears to
                    float in mid-air for a futuristic display that instantly
                    grabs attention.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-950">
                    Illuminated LED Base
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">
                    Built-in lighting adds a premium glow that makes the
                    floating car stand out on your desk or shelf.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Features Left, Image Right (Alternating Layout) */}
            <div className="flex flex-col-reverse gap-6 md:flex-row md:items-stretch">
              {/* Features Block */}
              <div className="flex w-full flex-col justify-center rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 md:w-1/2 space-y-6">
                <div>
                  <h3 className="font-bold text-stone-950">
                    360° Rotating Display
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">
                    Watch the car smoothly rotate while suspended, giving you a
                    dynamic view from every angle.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-950">
                    A Conversation Piece
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">
                    More than a model car&mdash;it&apos;s a unique display
                    designed to make people stop and ask, “How is that
                    floating?”
                  </p>
                </div>
              </div>

              {/* Image Block */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 h-[320px] md:h-auto md:w-1/2 min-h-[280px]">
                <Image
                  src="/red-porsche-2.jpg"
                  alt="Porsche levitating display on an office desk setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <FAQList />
        <Reviews />
      </div>
    </div>
  );
}

export default ProductDetails;
