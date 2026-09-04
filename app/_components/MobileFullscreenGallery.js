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
      {/* Absolute clean close trigger */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl z-50 p-2 outline-none"
        aria-label="Close gallery"
      >
        <XMarkIcon className="h-8 w-8 text-white" />
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
          <SwiperSlide key={img.id || i}>
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {/* FIXED: Check if the element is your looping video */}
              {img.type === "video" ? (
                <div className="w-full aspect-square relative">
                  <video
                    src={img.image}
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                /* Standard Fullscreen Image View Layer */
                <Image
                  src={img.image}
                  alt={img.alt_text || "Product View Detail"}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={i === startIndex} // Prioritizes loading the exact image they clicked on first
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileFullscreenGallery;
