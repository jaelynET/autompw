import { TruckIcon } from "@heroicons/react/24/outline";

function EstimateArrival() {
  // const EXPECTED_DELIVERY_START = fastShipping? 3 : 6;
  // const EXPECTED_DELIVERY_END = fastShipping? 2: 5;

  const EXPECTED_DELIVERY_START = 6;
  const EXPECTED_DELIVERY_END = 5;

  const today = new Date();

  // const startDate = new Date(today);
  // startDate.setDate(today.getDate() + EXPECTED_DELIVERY_START);

  // const endDate = new Date();
  // endDate.setDate(startDate.getDate() + EXPECTED_DELIVERY_END);

  function addDays(date, days) {
    return new Date(date.getTime() + days * 86400000);
  }

  const startDate = addDays(today, EXPECTED_DELIVERY_START);
  const endDate = addDays(startDate, EXPECTED_DELIVERY_END);

  const options = { weekday: "short", month: "short", day: "numeric" };

  const startingDate = startDate.toLocaleDateString("en-US", options);
  const endingDate = endDate.toLocaleDateString("en-US", options);

  // const endDate = today.setDate(startDate.getDate() + EXPECTED_DELIVERY_END);
  return (
    <div className="space-y-2">
      <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold tracking-wide uppercase bg-stone-100 text-stone-800 border border-stone-200 px-3 py-1 rounded-full">
        🚚 Free Freight Shipping
      </span>

      <div>
        <p className="text-sm font-medium text-stone-700">
          Delivered {startingDate} — {endingDate}
        </p>

        <p className="text-xs text-stone-500 mt-1">
          Includes liftgate curbside delivery
        </p>
      </div>
    
    </div>
  );
  // return (
  //   <div className="w-full bg-stone-50/50 border border-stone-250/60 rounded-xl p-4 transition-all duration-200 hover:border-stone-300">
  //     {/* Container switches from stacked (flex-col) on mobile to row (sm:flex-row) on tablet */}
  //     <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
  //       <div className="flex items-center gap-3">
  //         {/* Visual Anchor: Delivery Icon */}
  //         <div className="shrink-0 bg-white p-2 rounded-md shadow-sm border border-stone-100">
  //           <TruckIcon className="h-5 w-5 text-stone-600" />
  //         </div>

  //         {/* Delivery Timeline Messaging */}
  //         <div className="min-w-0">
  //           <p className="text-xs text-stone-500 sm:text-sm sm:text-stone-700 leading-tight">
  //             Estimated Delivery:
  //           </p>
  //           <p className="text-sm font-semibold text-stone-900 mt-0.5">
  //             {startingDate} — {endingDate}
  //           </p>
  //         </div>
  //       </div>

  //       {/* --- MOBILE PLACEMENT: Sits directly below on its own line --- */}
  //       {/* --- DESKTOP PLACEMENT: Snaps nicely to the right margin side --- */}
  //       <div className="pl-11 sm:pl-0 sm:ml-auto flex flex-col gap-1 sm:items-end">
  //         <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-600/10 px-2.5 py-0.5 rounded-md whitespace-nowrap">
  //           Free Freight Shipping
  //         </span>

  //         <span className="inline-block text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-600/10 px-2.5 py-0.5 rounded-md whitespace-nowrap">
  //           (includes liftgate delivery to your curb)
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default EstimateArrival;
