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
import FeatureBox from "./FeatureBox";

function ProductDetails({ product }) {
  const {
    title,
    gallery: productImages,
    product_title_seo,
    pricing,
    description,
    sellingPoints,
  } = product;
  const [selectedColor, setSelectedColor] = useState("black");

  const image1 = "/loop2.mp4";

  return (
    <div className="md:grid md:grid-cols-2  md:mt-8 md:ml-30 ">
      <ProductImages
        mainImage={image1}
        productImages={productImages}
        selectedColor={selectedColor}
      />
      {/* Clean, left-aligned wrapper matching the grid boundaries of your image and buy box */}
      <div className="mx-4 mt-6 mb-2 min-[375px]:mx-8 min-[425px]:mx-11 md:hidden">
        <h1 className="text-2xl font-normal tracking-tight text-stone-950 sm:text-3xl leading-tight">
          {product.title}
        </h1>

        <div className="mt-2 flex items-center gap-1.5 text-stone-950">
          <div className="flex gap-0.5">
            {/* 5 Structural Star Shapes (Use sharp, thin vector SVGs or simple characters) */}
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs">
                ★
              </span>
            ))}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-medium pt-0.5">
            (4.9 / 6 Reviews)
          </span>
        </div>
      </div>

      <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 font-sans">
        <div className="mt-4 w-full bg-white py-2">
          {/* 1. Price Container - Clean, elegant, and light text */}
          <div>
            <span className="text-3xl font-light tracking-tight text-stone-950 sm:text-4xl">
              {formatPrice(pricing.price)}
            </span>
          </div>
          <div className="mt-8 border-t border-stone-100 pt-5 font-sans">
            <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400 font-mono block">
              Material Finish
            </span>

            <div className="mt-3 flex gap-6">
              <div className="flex items-center gap-2.5 py-1.5 text-xs font-medium tracking-wider uppercase text-stone-950 border-b-2 border-stone-950">
                {/* Small, raw metal indicator dot matching the theme */}
                <span className="h-2 w-2 bg-stone-400 rounded-none block" />
                Brushed Steel / Ace Edition
              </div>
            </div>
          </div>
          {/* 2. Variant Selector - Perfectly readable asymmetry 
          <div className="mt-8 border-t border-stone-100 pt-5">
            <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400 font-mono block">
              Finish Selection
            </span>

            <div className="mt-3 flex gap-6">
              {/* Matte Black Button 
              <button
                type="button"
                onClick={() => setSelectedColor("black")}
                className={`flex items-center gap-2.5 py-1.5 text-xs font-medium tracking-wider uppercase transition rounded-none bg-transparent cursor-pointer ${
                  selectedColor === "black"
                    ? "text-stone-950 border-b-2 border-stone-950"
                    : "text-stone-400 hover:text-stone-700 border-b-2 border-transparent"
                }`}
              >
                <span className="h-2 w-2 bg-stone-950 rounded-none block" />
                Matte Black
              </button>

             
              <button
                type="button"
                onClick={() => setSelectedColor("white")}
                className={`flex items-center gap-2.5 py-1.5 text-xs font-medium tracking-wider uppercase transition rounded-none bg-transparent cursor-pointer ${
                  selectedColor === "white"
                    ? "text-stone-950 border-b-2 border-stone-950"
                    : "text-stone-400 hover:text-stone-700 border-b-2 border-transparent"
                }`}
              >
                <span className="h-2 w-2 bg-white border border-stone-300 rounded-none block" />
                Pure White
              </button>
            </div>
          </div>
          */}

          {/* 3. Primary Purchase Action (Undisputed Focal Point) */}
          <div className="mt-8">
            <CheckoutBtn product={product} selectedColor={selectedColor} />
          </div>

          {/* 4. Fine-Print Logistics - Demoted underneath the main goal */}
          {/* 4. Fine-Print Logistics - Tailored for US Designer Market */}
          <div className="mt-8 border-t border-stone-100 pt-5 space-y-2.5 ">
            {/* The Shipping Hook (US Focused) */}
            <div className="flex items-center gap-3 text-[11px] font-normal tracking-wide text-stone-600">
              <span className="h-1 w-1 bg-stone-900 rounded-none block" />
              <span className="font-medium text-stone-950">
                Complimentary US shipping included
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-normal tracking-wide text-stone-500">
              <span className="h-1 w-1 bg-stone-400 rounded-none block" />
              <span>Dispatched within 24–48 hours with live tracking</span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-normal tracking-wide text-stone-500">
              <span className="h-1 w-1 bg-stone-400 rounded-none block" />
              <span>30-day tactile satisfaction return guarantee</span>
            </div>
          </div>
        </div>
      </div>
      <FeatureBox />
      <FAQList />
      <Reviews />
    </div>
  );
}

export default ProductDetails;
