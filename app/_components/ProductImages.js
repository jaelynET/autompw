"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
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
import MobileGallery from "./MobileGallery";
import { XMarkIcon } from "@heroicons/react/24/outline";
import DesktopFullscreenGallery from "./DesktopFullscreenGallery";
import ProductGridSkeleton from "./ProductGridSkeleton";
import ThumbnailsSkeleton from "./ThumbnailsSkeleton";
import { useDom } from "./DomContext";

function ProductImages({ mainImage, productImages, selectedColor = "black" }) {
  const { domLoaded } = useDom();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // if (!domLoaded) return <ProductSwipeSkeleton count={2} />;

  // 1. Strict Mutually Exclusive Filters using your position mapping
  const filteredImages = productImages
    .filter((img) => img.color === selectedColor)
    .sort((a, b) => a.position - b.position);

  // 2. Clear out index memory instantly on variation swap
  useEffect(() => {
    if (mainSwiper && !mainSwiper.destroyed) {
      mainSwiper.slideTo(0, 0); // Force jump to index 0 instantly with 0ms transition delay
      mainSwiper.update(); // Remeasure the dynamic array size changes
    }
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideTo(0, 0);
      thumbsSwiper.update();
    }
    setActiveIndex(0);
  }, [selectedColor, mainSwiper, thumbsSwiper]);

  // FULLSCREEN

  const VISIBLE_THUMBS = 5; // full thumbnails visible
  const SCROLL_OFFSET = 2; // how close to edge before scrolling

  useEffect(() => {
    if (!thumbsSwiper || typeof activeIndex !== "number") return;
    const firstVisible = thumbsSwiper.activeIndex;
    const lastVisible = firstVisible + VISIBLE_THUMBS - 1;

    // If active thumb is near bottom edge → scroll down
    if (activeIndex > lastVisible - SCROLL_OFFSET) {
      thumbsSwiper.slideTo(activeIndex - (VISIBLE_THUMBS - SCROLL_OFFSET), 300);
    }

    // If active thumb is near top edge → scroll up
    if (activeIndex < firstVisible + SCROLL_OFFSET) {
      thumbsSwiper.slideTo(Math.max(activeIndex - SCROLL_OFFSET, 0), 300);
    }
  }, [activeIndex, thumbsSwiper]);

  // // GO OVER THIS WHEN YOU ADD VARIANTS
  // useEffect(() => {
  //   if (mainSwiper) mainSwiper.slideTo(0, 300);
  //   if (thumbsSwiper) thumbsSwiper.slideTo(0, 300);

  //   // mainSwiper.slideTo(0, 0);
  //   // thumbsSwiper.slideTo(0, 0);

  //   // mainSwiper.update();
  //   // thumbsSwiper.update();
  // }, [selectedColor, mainSwiper, thumbsSwiper]);

  return (
    <>
      {/* DESKTOP THUMBNAILS & MAIN GALLERY CONTAINER */}
      <div className="hidden md:flex md:gap-4 font-sans">
        {!domLoaded ? (
          <ThumbnailsSkeleton />
        ) : (
          <div className="hidden md:block">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              slidesPerView="auto"
              freeMode={{ enabled: true }}
              spaceBetween={10}
              mousewheel
              modules={[Thumbs, Mousewheel, FreeMode]}
              watchSlidesProgress
              className="w-20 h-[470px] hidden md:block"
            >
              {filteredImages.map((product, index) => (
                <SwiperSlide
                  key={product.id || index}
                  onMouseEnter={() => mainSwiper?.slideTo(index)}
                  className={`cursor-pointer border overflow-hidden transition !h-20 rounded-none ${
                    activeIndex === index
                      ? "border-stone-900"
                      : "border-stone-200"
                  }`}
                >
                  <div className="relative w-full h-full bg-white">
                    {/* Conditional check handling your thumbnail rendering engine */}
                    {product.type === "video" ? (
                      <video
                        src={product.image}
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-70"
                      />
                    ) : (
                      <Image
                        src={product.image}
                        alt="Thumbnail view"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* MAIN GALLERY DISPLAY */}
        <Swiper
          modules={[Thumbs, Keyboard]}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          allowTouchMove={true}
          slidesPerView={1}
          className="w-full h-auto overflow-hidden rounded-none border border-stone-100 bg-white"
        >
          {filteredImages.map((product, index) => (
            <SwiperSlide key={product.id || index} className="bg-white">
              <div className="w-full max-w-2xl mx-auto">
                {/* FIXED: Programmatic parsing route separating video from normal image logic */}
                {product.type === "video" ? (
                  <div className="relative w-full aspect-square overflow-hidden bg-stone-50">
                    <video
                      src={product.image}
                      autoPlay
                      loop
                      muted // 💡 Keeps desktop landing pages professional & silent
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover rounded-none"
                    />
                    {/* 1px Architectural structural border mask framing overlay */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="relative w-full aspect-square cursor-zoom-in block outline-none transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Image
                      src={product.image}
                      alt={product.alt_text || "Magnetic Product Gallery"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0 || index === 1}
                      className="object-cover object-center rounded-none"
                    />
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FULLSCREEN EXPANDED OVERLAY */}
      {isOpen && (
        <DesktopFullscreenGallery
          images={filteredImages}
          startIndex={activeIndex}
          onClose={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE COMPONENT FALLBACK */}
      <div className="md:hidden">
        <MobileGallery
          productImages={filteredImages}
          selectedColor={selectedColor}
        />
      </div>
    </>
  );
}

export default ProductImages;

/*
function nextSlide(){

}
*/
