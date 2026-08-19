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

function ProductImages({ mainImage, productImages, selectedColor = "red" }) {
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
      {/* THUMBNAILS */}
      <div className=" hidden md:flex md:gap-4">
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
                  className={`cursor-pointer border overflow-hidden transition !h-20 rounded-lg ${
                    activeIndex === index
                      ? "border-stone-900"
                      : "border-stone-200"
                  }`}
                >
                  <div className="relative w-full h-full bg-stone-950">
                    {product.type === "video" ? (
                      /* Minimal Video Thumbnail Placeholder */
                      <video
                        src={product.image}
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-60"
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

        {/* MAIN IMAGE */}
        <Swiper
          modules={[Thumbs, Keyboard]}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          onSwiper={setMainSwiper} // 👈 store the main swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          allowTouchMove={true}
          slidesPerView={1}
          className="w-full h-150 overflow-hidden rounded-2xl border border-stone-200"
        >
          {filteredImages.map((product, index) => (
            <SwiperSlide key={product.id || index} className="bg-stone-950">
              {product.type === "video" ? (
                /* Main Page Autoplay Video Loop */
                <div className="w-full h-full relative">
                  <video
                    src={product.image}
                    poster="/red-porsche-2.jpg"
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="relative w-full h-full cursor-zoom-in"
                >
                  <Image
                    src={product.image}
                    alt="Porsche display view"
                    fill
                    className="object-cover"
                    priority={index === 1} // High-priority loading for the primary variant image
                  />
                </button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen && (
        <>
          <DesktopFullscreenGallery
            images={filteredImages}
            startIndex={activeIndex}
            onClose={() => setIsOpen(false)}
          />
        </>
      )}

      <div className="md:hidden">
        <MobileGallery
          productImages={filteredImages}
          selectedColor={selectedColor}
        />
      </div>

      {/* <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          // spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}

          // pagination={{ clickable: true, el: ".swiper-pagination" }}
        >
          {productImages.map((product, i) => (
            <SwiperSlide key={product.id}>
              <div className="relative h-64  mb-3 w-full md:ml-4 md:h-130 ">
                <Image
                  src={product.image}
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center lg:hidden" ref={paginationRef}></div>
      </div> */}
      {/* 

      <div className="relative h-100 w-full mt-8">
        <Image
          // src={slides}
          src={slides[current].image}
          className="object-cover "
          fill
          alt={"Product"}
        />
        {current < 5 && (
          <div className="absolute top-0 left-[90%] transform translate-y-[600%] cursor-pointer">
            <ChevronRightIcon
              width={40}
              height={40}
              className="text-red-600 "
              onClick={nextSlide}
            />
          </div>
        )}

        {current > 0 && (
          <div className="absolute top-0 right-[90%] transform translate-y-[600%] cursor-pointer">
            <ChevronLeftIcon
              width={40}
              height={40}
              className="text-red-600 "
              onClick={prevSlide}
            />
          </div>
        )}
      </div>

      <div className=" flex gap-2 justify-center  mt-5 ">
        {productImages.map((product, i) => (
          <>
            {/* <div
              className={`rounded-full w-3  h-3 bg-main ${
                product.image === slides[current].image
                  ? "border-2 border-red-400"
                  : ""
              }`}
              key={product.id}
            ></div> 

            <div
              key={product.id}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer ${
                product.image === slides[current].image
                  ? "border-8 border-main"
                  : ""
              }`}
            >
              <Image
                src={product.image}
                width={70}
                height={70}
                alt="Product"
                // className="rounded-sm"
              />
            </div>
          </>
        ))}
      </div>
*/}
    </>
  );
}

export default ProductImages;

/*
function nextSlide(){

}
*/
