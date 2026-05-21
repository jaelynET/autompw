import Skeleton from "./Skeleton";

function ThumbnailsSkeleton() {
  return (
    <div className=" flex flex-col gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton className="h-20 w-20 hidden md:block" key={i} />
      ))}
    </div>
  );
}

export default ThumbnailsSkeleton;
