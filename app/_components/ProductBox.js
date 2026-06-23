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
import SimilarProducts from "./SimilarProducts";

async function ProductBox({ slug }) {
  const bathtub = await getBathtub(slug);

  const { id: bathtubId } = bathtub;
  const productImages = await getProductImages(bathtubId);
  const features = await productFeatures(bathtubId);
  const featureImages = await getProductFeatureImages(bathtubId);



  const {
    image,
    name,
    regularPrice,
    description,
    product_type,
    product_variants,
  } = bathtub;

  return (
    <>
      <div className="md:grid md:grid-cols-2 md:mt-8 md:ml-30 ">
        <ProductImages mainImage={image} productImages={productImages} />

        <div className="mx-4 mb-5 min-[375px]:mx-8 min-[425px]:mx-11 ">
          <ProductDetails product={bathtub} featureImages={featureImages} />
        </div>
      </div>
      {featureImages?.length > 0 ? (
        <ProductFeatures featureImages={featureImages} />
      ) : (
        <ProductCardFeatures features={features} />
      )}

      {/*
      {product_type === "bathtub" ? (
        <div className="mt-5">
          <CompatibleFaucets />{" "}
        </div>
      ) : (
        <p>hey</p>
      )}
      <CompatibleBathtubs productId={bathtubId} /> */}
      <div className="pb-10 ">
        <SimilarProducts slug={slug} />
      </div>

      {/* <div className="mt-5">
        <ProductReviews productId={bathtubId} />
      </div> */}
    </>
  );
}

export default ProductBox;
