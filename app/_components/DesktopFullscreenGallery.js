"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Pagination,
  Thumbs,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";

function DesktopFullscreenGallery({ images, startIndex, onClose }) {
  const [fullscreenThumbsSwiper, setfullscreenThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(startIndex);

  useEffect(() => {
    if (!fullscreenThumbsSwiper) return;
    fullscreenThumbsSwiper.slideTo(activeIndex, 300);
  }, [activeIndex, fullscreenThumbsSwiper]);

  return (
    <div className="fixed inset-0 z-50 hidden bg-black lg:flex items-center">
      {/* Absolute clean close trigger */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 outline-none"
        aria-label="Close gallery"
      >
        <XMarkIcon className="h-8 w-8 text-white hover:text-stone-300 transition-colors" />
      </button>

      {/* MAIN VIEWPORT PANELS */}
      <Swiper
        initialSlide={startIndex}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{
          swiper:
            fullscreenThumbsSwiper && !fullscreenThumbsSwiper.destroyed
              ? fullscreenThumbsSwiper
              : null,
        }}
        keyboard={{ enabled: true }}
        modules={[Thumbs, Navigation, Keyboard]}
        className="flex-1 h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.id || i}>
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {/* FIXED: Check if the main slide asset is your looping video */}
              {img.type === "video" ? (
                <div className="w-full max-w-2xl aspect-square relative">
                  <video
                    src={img.image}
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
              ) : (
                /* Clean High-Resolution Still Image Canvas */
                <Image
                  src={img.image}
                  alt={img.alt_text || "Haptic Slider Product View Detail"}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={i === startIndex}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* VERTICAL THUMBNAIL TRACK SYSTEM */}
      <div className="mr-15 h-[500px] shrink-0">
        <Swiper
          onSwiper={setfullscreenThumbsSwiper}
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={12}
          freeMode={{ enabled: true }}
          watchSlidesProgress
          modules={[Thumbs, Mousewheel, FreeMode]}
          mousewheel
          className="w-24 h-full px-2"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={img.id || index}
              onMouseEnter={() => mainSwiper?.slideTo(index)}
              className={`!h-24 cursor-pointer rounded-none transition overflow-hidden bg-stone-900 ${
                activeIndex === index
                  ? "border-2 border-white"
                  : "border border-transparent"
              }`}
            >
              <div className="relative w-full h-full">
                {img.type === "video" ? (
                  <video
                    src={img.image}
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                  />
                ) : (
                  <Image
                    src={img.image}
                    alt="Gallery item thumbnail"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DesktopFullscreenGallery;
