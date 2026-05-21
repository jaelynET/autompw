import { compatibleFaucets } from "../_lib/data-service";
import CompatibleProductCard from "./CompatibleProductCard";

async function CompatibleFaucets() {
  const products = await compatibleFaucets();
  // const productTypeProducts= product_type?
  // console.log(products);

  return (
    <div>
      <h3 className="font-bold ml-3 mb-3">Compatible Faucets</h3>
      <CompatibleProductCard products={products} />
    </div>
  );
}

export default CompatibleFaucets;
