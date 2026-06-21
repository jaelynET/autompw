import { TruckIcon } from "@heroicons/react/24/outline";

function ShippingMethod() {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold tracking-wide uppercase bg-stone-100 text-stone-800 border border-stone-200 px-3 py-1 rounded-full">
      <TruckIcon className="h-5 w-5 text-stone-600" /> Free Freight Shipping
    </span>
  );
}
export default ShippingMethod;
