import { PAGE_SIZE } from "../constants";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGridSkeleton({ count, isCarousel = false }) {
  const containerStyles = isCarousel
    ? "grid grid-flow-col auto-cols-[68%] gap-4 overflow-hidden md:grid-cols-3 lg:grid-cols-5"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6";

  return (
    <div className={containerStyles}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
}
