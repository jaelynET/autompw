import ProductDetails from "./ProductDetails";

import { product } from "../constants";

async function ProductBox() {
  return (
    <main className="w-full">
      <div className="mt-8 sm:mt-12 md:mt-16 mx-4 min-[375px]:mx-8 min-[425px]:mx-11">
        <ProductDetails product={product} />
      </div>
    </main>
  );
}

export default ProductBox;
