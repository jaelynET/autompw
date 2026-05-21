import { getOrder } from "@/app/_lib/data-service";
import { formatPrice } from "@/app/utils/format";
import Image from "next/image";

async function Page({ params }) {
  const { orderId } = await params;
  const order = await getOrder(orderId);
  // const { created_at } = order[0];
  // const { total_amount } = order[0];
  const { created_at, total_amount, products } = order[0];
  console.log(order);

  const date = new Date(created_at);
  const formattedDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="w-full max-w-md md:mx-auto bg-white border border-slate-100 rounded-2xl p-6 shadow-sm font-sans text-slate-700">
      {/* Premium Retail Heading using Playfair */}
      <h2 className="font-serif text-xl font-bold text-slate-900 mb-4 tracking-tight">
        Order Details
      </h2>

      {/* Summary Metadata Table */}
      <div className="space-y-2.5 pb-5 mb-5 border-b border-dashed border-slate-200 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Time Placed</span>
          <span className="font-medium text-slate-800">{formattedDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Order ID</span>
          <span className="font-mono text-xs bg-slate-50 px-2 py-0.5 rounded text-slate-600">
            {orderId}
          </span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="font-semibold text-slate-900">Total</span>
          <span className="font-bold text-base text-slate-900">
            {formatPrice(total_amount)}
          </span>
        </div>
      </div>

      {/* Product Items List Array Stack */}
      <div className="space-y-4">
        {products.map((item) => (
          <div key={item.name} className="flex gap-4 items-center">
            {/* Aspect Ratio Controlled Next.js Responsive Image Wrapper */}
            <div className="relative h-16 w-16 shrink-0 bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover"
                fill
                sizes="64px"
              />
            </div>

            {/* Product Meta Metrics Block */}
            <div className="flex-1 min-w-0 flex justify-between items-center gap-4">
              {/* Left side text container controls string overflows properly */}
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm text-slate-900 truncate mb-0.5">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400">
                  Qty: {item.quantity || 1}
                </p>
              </div>

              {/* Right side locked container guarantees price stays contained */}
              <div className="shrink-0 text-right">
                <span className="text-sm font-semibold text-slate-800 tabular-nums">
                  {formatPrice(item.unit_amount)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Page;
