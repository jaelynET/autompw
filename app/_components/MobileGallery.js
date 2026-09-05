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
  const [isReady, setIsReady] = useState(false);
  const [mobileSwiper, setMobileSwiper] = useState(null);

  const safeImages = (productImages || [])
    .filter((img) => img && img.image && img.color === selectedColor)
    .sort((a, b) => a.position - b.position);

  // Snap mobile slider framework back to index 0 when swatches change
  useEffect(() => {
    if (mobileSwiper && !mobileSwiper.destroyed) {
      mobileSwiper.slideTo(0, 0);
      mobileSwiper.update();
    }
  }, [selectedColor, mobileSwiper]);

  return (
    <>
      <div className="relative">
        {!isReady && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <Skeleton className="h-1.5 w-1.5 rounded-none" />
            <Skeleton className="h-1.5 w-1.5 rounded-none" />
            <Skeleton className="h-1.5 w-1.5 rounded-none" />
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setMobileSwiper}
          slidesPerView={1}
          onInit={() => setIsReady(true)}
          className={isReady ? "opacity-100" : "opacity-0"}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {safeImages.map((product, i) => {
            const mediaSrc = product.image;

            return (
              <SwiperSlide key={product.id || i}>
                <div className="w-full overflow-hidden">
                  <div className="w-full max-w-2xl mx-auto">
                    {/* FIXED: Check if the element is your looping video */}

                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="relative w-full h-auto cursor-zoom-in block outline-none transition-transform duration-300 active:scale-[0.99]"
                      aria-label={`View enlarged image ${i + 1}`}
                    >
                      <Image
                        src={mediaSrc}
                        alt="Magnetic Calendar View"
                        width={1080}
                        height={1350}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="w-full h-auto object-contain object-center rounded-none"
                        priority={i === 0 || i === 1} // Index 0 (video) and Index 1 load immediately
                      />
                      <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="text-center lg:hidden mt-2" ref={paginationRef}></div>
      </div>

      {isOpen && (
        <MobileFullscreenGallery
          images={productImages}
          startIndex={activeIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default MobileGallery;
