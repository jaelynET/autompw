import Skeleton from "./Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="rounded-lg p-4 space-y-3 w-full">
      <Skeleton className="h-64 w-full rounded-lg" />

      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
