"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MobileFullscreenGallery from "./MobileFullscreenGallery";
import Skeleton from "./Skeleton";
import VideoSlide from "./VideoSlide";

function MobileGallery({ productImages, selectedColor }) {
  const paginationRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileSwiper, setMobileSwiper] = useState(null);

  const safeImages = (productImages || [])
    .filter((img) => img && img.image && img.color === selectedColor)
    .sort((a, b) => a.position - b.position);

  useEffect(() => {
    if (mobileSwiper && !mobileSwiper.destroyed) {
      mobileSwiper.slideTo(0, 0);
      mobileSwiper.update();
    }
  }, [selectedColor, mobileSwiper]);

  return (
    <div className="relative w-full aspect-square bg-white">
      {/* 
        PERFORMANCE FIX: Removed opacity transitions entirely. 
        Swiper will render instantly, ensuring FCP fires inside the critical 1.5s viewport threshold.
      */}
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={setMobileSwiper}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
      >
        {safeImages.map((product, index) => {
          const isPrimaryHero = index === 0;

          return (
            <SwiperSlide key={product.id || index} className="w-full h-full">
              {product.type === "video" ? (
                <div className="relative w-full aspect-square overflow-hidden bg-stone-50">
                  <video
                    src={product.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload={isPrimaryHero ? "metadata" : "none"}
                    {...(isPrimaryHero ? { fetchpriority: "high" } : {})}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image}
                    alt="Product Gallery View"
                    fill
                    sizes="100vw"
                    priority={isPrimaryHero} // Crucial for instant mobile parsing
                    className="object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Modern, non-layout-breaking absolute dot track navigation marker */}
      <div
        ref={paginationRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5"
      />
    </div>
  );
}

export default MobileGallery;
