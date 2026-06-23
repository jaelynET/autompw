"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

function MobileFullscreenGallery({ images, startIndex, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black lg:hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl z-50"
      >
        <XMarkIcon className="h-10 w-10 text-white" />
      </button>

      <Swiper
        initialSlide={startIndex}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Pagination, Keyboard]}
        className="w-full h-full mobile-gallery"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image src={img.image} 
               alt={img.alt_text||img.products.product_title_seo}
              fill className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileFullscreenGallery;
