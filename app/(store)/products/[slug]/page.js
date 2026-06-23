import {
  getBathtub,
  getBathtubs,
  getProductImages,
  getReviews,
  showSimilarTubs,
} from "@/app/_lib/data-service";
import Image from "next/image";
import CheckoutBtn from "@/app/_components/CheckoutBtn";
import AddToCart from "@/app/_components/AddToCart";
import Quantity from "@/app/_components/Quantity";
import ProductImages from "@/app/_components/ProductImages";
import SoldPopup from "@/app/_components/SoldPopup";
import ProductDetails from "@/app/_components/ProductDetails";
import Cart from "@/app/_components/CartItems";
import FeatureBox from "@/app/_components/FeatureBox";
import ProductVariant from "@/app/_components/ProductVariant";
import EstimateArrival from "@/app/_components/EstimateArrival";
import ProductReviews from "@/app/_components/ProductReviews";
import SimilarProducts from "@/app/_components/SimilarProducts";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import CompatibleProducts from "@/app/_components/CompatibleFaucets";
import ProductGridSkeleton from "@/app/_components/ProductGridSkeleton";
import ProductBox from "@/app/_components/ProductBox";

// export const runtime = "edge";

// export async function generateStaticParams() {
//   const bathtubs = await getBathtubs();
//   const ids = bathtubs.map((bathtub) => ({
//     bathtubId: String(bathtub.id),
//   }));
//   return ids;
// }
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const bathtub = await getBathtub(slug);
  return {
    title: bathtub.meta_title,
    description: bathtub.meta_description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <main className="flex-1 min-h-screen">
      <ProductBox slug={slug} />
    </main>
  );
}
