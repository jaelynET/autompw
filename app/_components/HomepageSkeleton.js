import Skeleton from "./Skeleton";

function HomePageSkeleton() {
  return (
    <div className=" ">
      {/* =====================================
          BANNER
      ===================================== */}
 <div className="w-full mb-14">
        <Skeleton className="h-[300px] md:h-[420px] w-full" />
      </div>

      {/* =====================================
          BEST SELLERS
      ===================================== */}
      <section className="mb-14 ">
        <div className="ml-4 md:ml-8 mb-5">
          <Skeleton className="h-6 w-60" />
        </div>
        <div className="ml-4 md:ml-8 grid grid-flow-col auto-cols-[70%] md:auto-cols-[32%] lg:auto-cols-[20%] gap-4 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          FEATURE BLOCK
      ===================================== */}
      <section className="mb-8">

    <Skeleton className="h-[220px] md:h-[260px] w-full" />
        </section>

      {/* =====================================
          UNDER X SECTION (GRID)
      ===================================== */}
      <section className=" mb-14">
        <div className="ml-4 md:ml-8 mb-5">
          <Skeleton className="h-6 w-72" />
        </div>
        <div className="ml-4 md:ml-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>
     
    </div>
  );
}
export default HomePageSkeleton;
