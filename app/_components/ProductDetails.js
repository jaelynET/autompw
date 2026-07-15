"use client";

import { useState, useEffect } from "react";
import { sendGtagEvent, ADS_TRACKING_ID } from "../utils/gtag";
import { formatPrice } from "../utils/format";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import EstimateArrival from "./EstimateArrival";
import AddToCart from "./AddToCart";
import KlarnaMessage from "./KlarnaMessage";
import ExpandableSection from "./ExpandableSection";
import ProductSpecs from "./ProductSpecs";

import ProductDimensions from "./ProductDimensions";
import ProductInstallDocs from "./ProductInstallDocs";
import ProductVariant from "./ProductVariant";
import { reviews } from "../constants";
import CheckoutBtn from "./CheckoutBtn";

function ProductDetails({ product }) {
  const { title, product_title_seo, pricing, description, sellingPoints } =
    product;

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl leading-tight">
          {title}
        </h1>
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white shadow-sm">
          <span>🔥</span> Best Seller
        </span>

        <div className="mt-3 flex flex-col gap-1 ">
          <div>
            <span className="text-2xl font-black text-stone-950 sm:text-3xl md:text-4xl tracking-tight">
              {formatPrice(pricing.price)}
            </span>

            <span className="ml-2 text-lg text-stone-500 line-through">
              {formatPrice(pricing.compareAt)}
            </span>
          </div>
          <div>
            <span>
              Save {formatPrice(pricing.compareAt - pricing.price)} · In stock ·
              Ships in 2-4 Business Days
            </span>
          </div>

          <div className="min-h-[40px] w-full block clear-both my-3">
            <KlarnaMessage amount={pricing.price} />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm  font-md mt-2 mb-3">
          {sellingPoints.map((sellingPoint) => (
            <div key={sellingPoint}>
              <p>☑️ {sellingPoint}</p>
            </div>
          ))}
        </div>
        {/* Fitment */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Vehicle Fitment
          </h2>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-medium text-gray-900">Compatible Vehicles</h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {product.fitment.vehicles.map((vehicle) => (
                <li key={vehicle} className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{vehicle}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t pt-4">
              <p className="text-sm">
                <span className="font-semibold text-gray-900">Years:</span>{" "}
                {product.fitment.years.join(", ")}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  Installation Note:
                </span>{" "}
                {product.fitment.installationNote}
              </p>
            </div>
          </div>
        </section>
        <CheckoutBtn product={product} />
        {/* <div className="flex flex-col gap-1 text-sm  font-md mt-2">
          {sellingPoints.map((sellingPoint) => (
            <div key={sellingPoint}>
              <p>☑️ {sellingPoint}</p>
            </div>
          ))}
        </div> */}

        <div className="space-y-8">
          {/* Description */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Product Description
            </h2>

            <p className="leading-7 text-gray-600">{product.description}</p>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Specifications
            </h2>

            <div className="overflow-hidden rounded-lg border border-gray-200">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="grid grid-cols-2 border-b border-gray-200 last:border-b-0"
                >
                  <div className="bg-gray-50 px-4 py-3 font-medium text-gray-900">
                    {key}
                  </div>

                  <div className="px-4 py-3 text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* <div className="mt-8 border-t border-stone-200 pt-6">
          <ExpandableSection title="Description" openCollapse="true">
            <p className=" leading-relaxed">{description}</p>
          </ExpandableSection>
          <ExpandableSection title="Dimensions">
            <ProductDimensions
              product={product}
              selectedVariant={selectedVariant}
            />
          </ExpandableSection>
          <ExpandableSection title="Specifications">
            <ProductSpecs product={product} selectedVariant={selectedVariant} />
          </ExpandableSection>

          <ExpandableSection title="Installations & Documents">
            <ProductInstallDocs
              product={product}
              selectedVariant={selectedVariant}
            />
          </ExpandableSection>
        </div> */}
        <section>
          <h2 className="mb-4 mt-5 text-lg font-semibold text-gray-900">
            Customer Reviews
          </h2>
          <div className="mt-6 divide-y divide-gray-200">
            {reviews.map((reviewer) => (
              <div key={reviewer.id} className="py-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-700">
                      {reviewer.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {reviewer.name}
                      </p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(reviewer.rating)}
                    <span className="text-gray-300">
                      {"★".repeat(5 - reviewer.rating)}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  {reviewer.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {reviewer.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetails;
