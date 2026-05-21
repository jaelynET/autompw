import { limitedDeals } from "../_lib/data-service";
import LimitedDeals from "./LimitedDeals";

async function LimitedDealsList() {
  const deals = await limitedDeals();
  console.log(deals);
  return (
    <div className="ml-5 md:ml-8">
      <LimitedDeals tubs={deals} />
    </div>
  );
}

export default LimitedDealsList;
