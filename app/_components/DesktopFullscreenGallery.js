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
    <div className="fixed inset-0 z-50 hidden bg-black lg:flex">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 "
        aria-label="Close gallery"
      >
        <XMarkIcon className="h-10 w-10 text-white" />
      </button>
      {/* Main */}
      <Swiper
        initialSlide={startIndex}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{ swiper: fullscreenThumbsSwiper }}
        keyboard={{ enabled: true }}
        modules={[Thumbs, Navigation, Keyboard]}
        className="flex-1"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image src={img.image} alt="" fill className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="mr-15">
        <Swiper
          onSwiper={setfullscreenThumbsSwiper}
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={{ enabled: true }}
          watchSlidesProgress
          modules={[Thumbs, Mousewheel, FreeMode]}
          mousewheel
          className="w-24 h-full px-4  "
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => mainSwiper?.slideTo(index)}
              className={`!h-24 cursor-pointer rounded transition ${
                activeIndex === index
                  ? "border-2 border-white"
                  : "border border-transparent"
              }`}
            >
              <Image src={img.image} alt="" fill className="object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DesktopFullscreenGallery;
