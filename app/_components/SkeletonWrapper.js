import ProductGridSkeleton from "./ProductGridSkeleton";

export default function SkeletonWrapper() {
  return (
    <div className="ml-5 md:ml-8  min-h-95">
      <ProductGridSkeleton count={5} isCarousel />
    </div>
  );
}
