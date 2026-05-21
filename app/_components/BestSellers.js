"use client";
import Image from "next/image";

import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/swiper.css";
import Stars from "./Stars";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { useEffect, useState } from "react";
import { useDom } from "./DomContext";
import Link from "next/link";

function BestSellers({ tubs }) {
  // console.log(tubs);
  // const { regularPrice, name, image, averageRating } = tub;

  // const formattedPrice = (regularPrice / 100).toLocaleString("en-US", {
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  //   style: "currency",
  //   currency: "USD",
  // });

  // const { domLoaded } = useDom();

  // if (!domLoaded) return <ProductGridSkeleton count={3} />; // or a skeleton
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[380px] w-full overflow-hidden">
        <ProductGridSkeleton count={5} isCarousel />
      </div>
    );
  }

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

      // navigation
      // pagination={{ el: paginationRef.current, clickable: true }}
    >
      {tubs.map((tub) => (
        <SwiperSlide key={tub.id}>
          {/* !w-auto is critical for 'slidesPerView: auto' */}
          <Link
            // href={`/collections/bathtubs/${slug}/${id}`}
            href={`/products/${tub.slug}`}
            className="cursor-pointer"
          >
            <div className="relative aspect-square w-full  mb-3">
              <Image
                src={tub.image}
                alt={tub.name}
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="w-47">
              <p className="text-base uppercase tracking-wide text-pretty md:text-wrap line-clamp-2 font-bold ">
                {tub.name}
              </p>
              {/* <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground">
          {averageRating.toFixed(1)}
          </span>
          <Stars averageRating={averageRating} />
        </div> */}
              <span className="text-sm">{tub.formattedPrice}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BestSellers;
