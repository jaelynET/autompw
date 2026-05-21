"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import "@/app/swiper.css";

function LimitedDeals({ tubs = [] }) {
  if (!tubs) {
    console.error("LimitedDeals received invalid tubs:", tubs);
    return null;
  }
  // console.log(tubs);
  return (
    // <h1>HELLO</h1>
    <Swiper
      key={tubs.length}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={"auto"}
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
          spaceBetween: 20,
        },
      }}
      // spaceBetween={100}
    >
      {tubs.map((product) => (
        <SwiperSlide key={product.id} className="!w-auto">
          <div className="relative h-64 w-50 md:w-65 mb-3 ">
            <Image
              src={product.image}
              alt="Product"
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="w-47">
            <p className="text-base uppercase tracking-wide text-pretty md:text-wrap line-clamp-2 font-bold ">
              {product.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LimitedDeals;
