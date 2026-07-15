import { redirect } from "next/navigation";
import { stripe } from "@/app/_lib/stripe";
import SuccessPage from "../_components/SuccessPage";
import PurchaseTracking from "../_components/PurchaseTracking";

// import { stripe } from "@app/_lib/stipe";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section id="success">
        <PurchaseTracking session={session} />
        <SuccessPage customerEmail={customerEmail} />
      </section>
    );
  }
}
