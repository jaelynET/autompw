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

function ProductDetails({ product, featureImages }) {
  const {
    name,
    product_title_seo,
    description,
    product_variants,
    sub_headline,
  } = product;
  // const [selectedVariant, setSelectedVariant] = useState(
  //   product.product_variants?.[0] || {},
  // );

  const firstAvailableVariant =
    product.product_variants?.find((v) =>
      v.inventory?.some((i) => i.in_stock && !i.discontinued),
    ) ||
    product.product_variants?.[0] ||
    {};

  const [selectedVariant, setSelectedVariant] = useState(firstAvailableVariant);

  useEffect(() => {
    // Ensure both the variant data and the Tracking ID are active
    if (!selectedVariant || !ADS_TRACKING_ID) return;

    // Convert string prices to numerical floats if they contain strings (e.g., "1250.00")
    const variantPrice = parseFloat(selectedVariant.regularPrice);

    sendGtagEvent("view_item", {
      send_to: ADS_TRACKING_ID,
      value: variantPrice,
      currency: "USD",
      items: [
        {
          // ⚠️ IMPORTANT: This ID must match your Google Merchant Center Feed item ID.
          // If your feed uses parent IDs, use product.sku. If it tracks unique variant SKUs, use selectedVariant.sku.
          id:
            selectedVariant.manufacturer_part_number ||
            product.manufacturer_part_number,
          name: `${product.short_name} - ${selectedVariant.name}`, // Appends variant title to product title
          price: variantPrice,
        },
      ],
    });

    // Add selectedVariant to dependency array to refire the tag if the user swaps variants
  }, [selectedVariant, product]);

  const variants = product_variants || [];

  const allInventory = variants.flatMap((v) => v.inventory || []);

  // 🚨 DISCONTINUED = ALL items discontinued
  const isDiscontinued =
    allInventory.length > 0 &&
    allInventory.every((i) => i.discontinued === true);

  // 🚨 IN STOCK = at least one valid stock item
  const inStock = allInventory.some(
    (i) => i.in_stock === true && i.quantity > 0 && !i.discontinued,
  );

  // 🚨 OUT OF STOCK (explicit state)
  const outOfStock = !isDiscontinued && !inStock && allInventory.length > 0;

  // 🚨 NO INVENTORY AT ALL (important edge case)
  const noInventory = allInventory.length === 0;

  const savings =
    selectedVariant.regular_price - selectedVariant.discount_price;

  return (
    <>
      <div>
        {isDiscontinued ? (
          <p className="text-xs uppercase text-stone-400">Discontinued</p>
        ) : outOfStock || noInventory ? (
          <p className="text-xs uppercase text-neutral-500">Out of Stock</p>
        ) : null}
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl leading-tight">
          {name}
        </h1>
        <h4>{sub_headline}</h4>

        {/* Price/Finacing */}
        <div className="mt-3 flex flex-col gap-1 ">
          {/* <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-stone-950 sm:text-3xl md:text-4xl tracking-tight">
              {formatPrice(selectedVariant.regularPrice)}
            </span>
            <span className="text-2xl font-black text-stone-950 sm:text-3xl md:text-4xl tracking-tight line-through ">
              {formatPrice(selectedVariant.discount_price)}
            </span>
          </div> */}
          <div>
            <span className="text-2xl font-black text-stone-950 sm:text-3xl md:text-4xl tracking-tight">
              {formatPrice(selectedVariant.regularPrice)}
            </span>
            {/* need to change regularprice to discount */}
            <span className="ml-2 text-lg text-stone-500 line-through">
              {formatPrice(selectedVariant.discount_price)}
            </span>

            <p className="mt-1 text-sm font-medium text-green-700">
              Save{" "}
              {formatPrice(
                selectedVariant.discount_price - selectedVariant.regularPrice,
              )}{" "}
              + Free Freight Shipping
            </p>
          </div>

          <div className="mt-2 mb-2">
            <EstimateArrival />
          </div>
          <div className="min-h-[40px] w-full block clear-both my-3">
            <KlarnaMessage amount={selectedVariant.regularPrice} />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm  font-md mt-2">
          <p>
            ✓ Premium{" "}
            {product.material === "acrylic" ? `PMMA Acrylic` : `Solid Surface`}{" "}
            Construction
          </p>
          <p>✓ Heat-retaining, durable design built for daily use</p>
          <p>✓ Easy returns for damaged deliveries</p>
        </div>
        <div className="mt-6 border-y border-stone-100 py-4">
          <ProductVariant
            product={product}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {/* The main call to action sits cleanly right under the variant selections */}
          {isDiscontinued || !inStock ? (
            ""
          ) : (
            <AddToCart product={product} selectedVariant={selectedVariant} />
          )}
        </div>
        <div className="mt-8 border-t border-stone-200 pt-6">
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
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
