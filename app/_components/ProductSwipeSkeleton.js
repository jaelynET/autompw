import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductSwipeSkeleton({ count }) {
  return (
    <div className="flex gap-2 w-50">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
