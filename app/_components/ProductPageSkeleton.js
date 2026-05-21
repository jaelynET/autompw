import ProductGridSkeleton from "./ProductGridSkeleton";
import Skeleton from "./Skeleton";
import ThumbnailsSkeleton from "./ThumbnailsSkeleton";
// app/(store)/products/[slug]/loading.js


export default function Loading() {
  return (
    <main className="flex-1 min-h-screen">
      {/* =================================================================
          MAIN PRODUCT SPLIT GRID
         ================================================================= */}
      <div className="md:grid md:grid-cols-2 md:mt-8 md:ml-30">
        
        {/* LEFT COLUMN: IMAGES SECTION (Desktop Flex layout matching ProductImages) */}
        <div className="hidden md:flex md:gap-4 w-full">
          {/* Thumbnails Column - Fixed 80px width, 470px height to perfectly mimic your Swiper */}
          <div className="w-20 h-[470px] flex flex-col gap-[10px] flex-shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-full h-20 border rounded-none flex-shrink-0" />
            ))}
          </div>

          {/* Main Large Image Container - Uses style height to fix the missing Tailwind h-150 class */}
          <div className="w-full" style={{ height: "600px" }}> {/* h-150 translates to 600px if using 4px steps */}
            <Skeleton className="w-full h-full rounded-none" />
          </div>
        </div>

        {/* MOBILE FALLBACK PLACEHOLDER 
            (Mirrors what your mobile component loads before hydration) */}
        <div className="md:hidden w-full aspect-square max-h-[400px]">
          <Skeleton className="w-full h-full" />
        </div>

        {/* RIGHT COLUMN: DETAILS SECTION */}
        {/* Uses the exact side margin configurations from ProductBox */}
        <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 mt-6 md:mt-0 flex flex-col gap-4">

          {/* Dynamic Product Name Heading (Sizes match text-2xl sm:text-3xl md:text-4xl) */}
          <Skeleton className="h-8 w-11/12 md:h-10 leading-tight" />

          {/* Price Layout Placeholders */}
          <div className="mt-3 flex flex-col gap-1">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          {/* Interactive Button Skeletons */}
          <div className="mt-6 space-y-3">
            <Skeleton className="w-full md:w-72 h-12 rounded-full" />
          </div>
        </div>
      </div>

      {/* =================================================================
          BOTTOM SECTION CAROUSEL (SimilarProducts Spacing)
         ================================================================= */}
      <div className="pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-x-8 px-4 sm:px-6 lg:px-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full rounded-lg" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}



