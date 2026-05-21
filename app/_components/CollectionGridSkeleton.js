import Skeleton from "./Skeleton";

export default function CollectionGridSkeleton({ count = 8 }) {
  return (
    <main className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 md:mt-10 mb-20">

            <header className="mb-8 md:mb-12 border-b border-stone-200/60 pb-6 md:pb-8"> 
                  {/* Breadcrumb Skeleton Line */}
             <div className="flex items-center gap-1.5 mb-2">
          <Skeleton className="h-3 w-32" />
        </div>
                {/* Title Heading Line */}

          <Skeleton className="h-8 w-48 sm:h-9 md:h-10 mb-3" />
            {/* Category Description Block lines */}
             <div className="space-y-2 max-w-xl">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
            </header>

      {/* =================================================================
        GRID SKELETON (Mirrors live product container and responsive grids)
       ================================================================= */}
      <section aria-label="Loading Products">
        {/* Uses the exact responsive classes and spacing gaps as BathtubList */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-x-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              {/* Aspect Square preserves image boundaries */}
              <Skeleton className="aspect-square w-full rounded-lg" />
              {/* Product Info Lines */}
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>
      </main>
  );
}
