"use client";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/swiper.css";
import AddToCartMini from "./AddToCartMini";

import { useEffect, useState } from "react";
import ProductSwipeSkeleton from "./ProductSwipeSkeleton";
import { useDom } from "./DomContext";
import ProductGridSkeleton from "./ProductGridSkeleton";

function CompatibleProductCard({ products, slug }) {
  if (!products?.length) {
    return <ProductGridSkeleton count={5} isCarousel />;
  }
  console.log(products);
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex lg:gap-3 lg:w-md lg:ml-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} slug={slug} />
            <AddToCartMini product={product.product_variants} />
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="ml-4 lg:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={12}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CompatibleProductCard;
