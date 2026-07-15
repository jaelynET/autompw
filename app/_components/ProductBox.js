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
  const { gallery: productImages, specifications } = product;
  const image1 = "/chevyhero.png";
  console.log(productImages);

  return (
    <>
      <div className="md:grid md:grid-cols-2 md:mt-8 md:ml-30 ">
        <ProductImages mainImage={image1} productImages={productImages} />

        <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 ">
          <ProductDetails product={product} />
        </div>
      </div>

      {/* {featureImages?.length > 0 ? (
        <ProductFeatures featureImages={featureImages} />
      ) : (
        <ProductCardFeatures features={features} />
      )} */}
    </>
  );
}

export default ProductBox;
