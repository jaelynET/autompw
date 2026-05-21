import { popularTubs } from "../_lib/data-service";
import BestSellers from "./BestSellers";
import ProductGridSkeleton from "./ProductGridSkeleton";

async function BestSellersList() {
  // const paginationRef = useRef(null);
  const tubs = await popularTubs();

  return (
    <div className="ml-5 md:ml-8">
      <BestSellers tubs={tubs} />
    </div>
  );
}

export default BestSellersList;
