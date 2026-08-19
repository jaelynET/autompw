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
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setMobileSwiper} // 👈 Storing instance tracking reference locally
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
            const isVideo =
              product.type === "video" ||
              (typeof product.image === "string" &&
                product.image.endsWith(".mp4"));
            const mediaSrc = product.image || product;

            return (
              <SwiperSlide key={product.id || i}>
                <div className="w-full aspect-square sm:aspect-4/3 overflow-hidden rounded-xl bg-stone-950 border border-stone-200/40">
                  {isVideo ? (
                    /* 🎥 Mobile Video Slide Engine */
                    <div className="relative w-full h-full">
                      <video
                        src={mediaSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    /* 🖼️ Standard Image Slide Engine */
                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="relative w-full h-full cursor-zoom-in block outline-none transition-transform duration-300 active:scale-[0.99]"
                      aria-label={`View enlarged image ${i + 1}`}
                    >
                      <Image
                        src={mediaSrc}
                        alt={product.alt_text || "Product display view"}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={i === 1} // Index 0 is the video, Index 1 becomes your high-priority primary product image LCP
                      />
                    </button>
                  )}
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
