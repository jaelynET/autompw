"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import Image from "next/image";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { useEffect, useState } from "react";
import Link from "next/link";

function UnderX({ tubs }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <ProductGridSkeleton count={5} isCarousel />;
  return (
    <Swiper
      key={tubs.length}
      modules={[Navigation]}
      roundLengths={true}
      className="overflow-hidden"
      spaceBetween={20}
      observer={true}
      observeParents={true}
      breakpoints={{
        0: { slidesPerView: 1.5, spaceBetween: 15 },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
          allowTouchMove: false,
        },
      }}
    >
      {tubs.map((product) => (
        <SwiperSlide key={product.id}>
          <Link href={`/products/${product.slug}`} className="cursor-pointer">
            <div className="relative aspect-square w-full  mb-3">
              <Image
                src={product.image}
                alt={product.name}
                className="object-contain"
                fill
                priority
              />
            </div>
            <p className="text-base uppercase tracking-wide text-pretty md:text-wrap line-clamp-2 font-bold ">
              {product.name}
            </p>
            <span className="text-sm">{product.formattedPrice}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default UnderX;
