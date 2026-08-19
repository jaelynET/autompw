import {
  getBathtub,
  getProductFeatureImages,
  getProductImages,
  productFeatures,
} from "../_lib/data-service";
import CompatibleFaucets from "./CompatibleFaucets";
import ProductCardFeatures from "./ProductCardFeatures";
import ProductDetails from "./ProductDetails";
import ProductFeatures from "./ProductFeatures";
import ProductImages from "./ProductImages";
import ProductReviews from "./ProductReviews";
import { product } from "../constants";

async function ProductBox() {
  // const productImages = await getProductImages(bathtubId);
  // const features = await productFeatures(bathtubId);
  // const featureImages = await getProductFeatureImages(bathtubId);
  const { gallery: productImages, specifications, title } = product;

  return (
    <>
      {/* <div className="md:grid md:grid-cols-2 md:mt-8 md:ml-30 "> */}
      <div className="flex flex-col items-center justify-center text-center mt-5 mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl leading-tight md:hidden ">
          {title}
        </h1>
        <span className="text-xs ">Watch it float. Watch it Spin.</span>
      </div>

      {/* <ProductImages mainImage={image1} productImages={productImages} /> */}

      {/* <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 "> */}
      <ProductDetails product={product} />
      {/* </div> */}
      {/* </div> */}

      {/* {featureImages?.length > 0 ? (
        <ProductFeatures featureImages={featureImages} />
      ) : (
        <ProductCardFeatures features={features} />
      )} */}
    </>
  );
}

export default ProductBox;
