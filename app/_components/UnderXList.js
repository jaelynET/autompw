import { underXTubs } from "../_lib/data-service";
import UnderX from "./UnderX";
import ProductGridSkeleton from "./ProductGridSkeleton";

async function UnderXList() {
  const tubs = await underXTubs();

  return (
    <div className="ml-5 md:ml-8">
      <UnderX tubs={tubs} />
    </div>
  );
}

export default UnderXList;
