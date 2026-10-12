import Skeleton from "./Skeleton";

export default function Loading() {
  return (
    <main className="flex-1">
      {/* Hero placeholder */}
      <section className="relative min-h-[620px] overflow-hidden bg-neutral-200 sm:min-h-[680px] md:min-h-[760px]">
        <div className="mx-auto flex min-h-[620px] w-full max-w-7xl items-center px-6 py-24 sm:min-h-[680px] md:min-h-[760px] md:px-12">
          <div className="w-full max-w-3xl space-y-6">
            <Skeleton className="hidden h-4 w-64 md:block" />
            <Skeleton className="h-12 w-11/12 sm:h-16 md:h-20" />
            <Skeleton className="h-4 w-4/5 max-w-md sm:h-5" />
            <Skeleton className="h-12 w-48 rounded-none" />
          </div>
        </div>
      </section>
    </main>
  );
}
