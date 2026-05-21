"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState, use, useEffect } from "react";
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

function ProductImages({ mainImage, productImages }) {
  const { domLoaded } = useDom();

  // if (!domLoaded) return <ProductSwipeSkeleton count={2} />;
  const firstPic = productImages.find((product) => product.position === 1);

  const { id, image, position } = firstPic;

  const [displayImage, setDisplayImage] = useState(productImages);

  const [slides, setslides] = useState(productImages);
  const [current, setCurrent] = useState(0);
  const paginationRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  // FULLSCREEN
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }
  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

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

  // GO OVER THIS WHEN YOU ADD VARIANTS
  //   useEffect(() => {
  //   if (!mainSwiper || !thumbsSwiper) return;

  //   mainSwiper.slideTo(0, 0);
  //   thumbsSwiper.slideTo(0, 0);

  //   mainSwiper.update();
  //   thumbsSwiper.update();
  // }, [productImages]);

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
              {productImages.map((product, index) => (
                <SwiperSlide
                  key={product.id}
                  onMouseEnter={() => mainSwiper?.slideTo(index)}
                  className="cursor-pointer border  overflow-hidden transition !h-20 "
                >
                  <div className="relative w-full h-20">
                    <Image
                      src={product.image}
                      alt="Product Thumbnail"
                      fill
                      className="object-cover"
                    />
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
          thumbs={{ swiper: thumbsSwiper }}
          allowTouchMove={false}
          slidesPerView={1}
          className="w-full h-150"
        >
          {productImages.map((product, index) => (
            <SwiperSlide key={product.id}>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative w-full h-full cursor-zoom-in"
              >
                <Image
                  src={product.image}
                  alt="Product"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen && (
        <>
          <DesktopFullscreenGallery
            images={productImages}
            startIndex={activeIndex}
            onClose={() => setIsOpen(false)}
          />
        </>
      )}

      <div className="md:hidden">
        <MobileGallery productImages={productImages} />
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
