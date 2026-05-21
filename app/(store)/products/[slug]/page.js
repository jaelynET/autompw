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

export default async function Page({ params }) {
  const { slug } = await params;

  // const bathtub = await getBathtub(slug);
  // const { id: bathtubId } = bathtub;

  // const productImages = await getProductImages(bathtubId);

  // const { image, name, regularPrice, description, priceId } = bathtub;

  return (
    <main className="flex-1 min-h-screen">
 
        <ProductBox slug={slug} />

    </main>
  );
}

/* <>
       <div >
        <ProductImages mainImage={image} productImages={productImages} />
        <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 ">
          <ProductDetails product={bathtub} />
        </div> 
      
         <div><ProductVariant bathtub={bathtub} /> </div>

         <div className="mb-4">
           <h3 className="text-grey-0 text-[16px] min-[375px]:mx-8  font-semibold mx-4 mb-1 min-[425px]:mx-11">
            Features
          </h3> 
         <FeatureBox /> 
         </div> 
       </div>
       <div className="mt-5">
        <CompatibleProducts productId={bathtubId} />
      </div>
      <div className="mt-4 ">
        <Suspense fallback={<p>Loading Similar Tubs..... </p>}>
          <SimilarProducts slug={slug} />
        </Suspense>
      </div>

      <div className="mt-5">
        <Suspense fallback={<ProductGridSkeleton count={3} />}>
          <ProductReviews productId={bathtubId} />
        </Suspense>
      </div> 
     </> */
