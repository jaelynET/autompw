import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const runtime = "nodejs";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(req) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      console.error("Stripe signature error:", err.message);
      return new NextResponse("Invalid signature", { status: 400 });
    }

    if (event.type !== "checkout.session.completed") {
      return NextResponse.json({ received: true });
    }

    const session = event.data.object;

    if (!session?.id) {
      return new NextResponse("No session", { status: 400 });
    }
  

    // Prevent duplicates
    const { data: existing } = await supabaseAdmin
      .from("orders")
      .select("order_id")
      .eq("stripe_session_id", session.id)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ received: true });
    }
    // Retrieve session object to get/expand shipping details
    const checkOutSession = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
    );

    const shipping =
      checkOutSession.shipping_details?.address ||
      checkOutSession.customer_details?.address ||
      null;
    const billing = checkOutSession.customer_details?.address;
  // Add this temporary log right before you query the database
    console.log("DEBUG: Target Supabase URL is:", supabaseAdmin.supabaseUrl);
    // Insert order
    const { error: orderError } = await supabaseAdmin.from("orders").insert({
      stripe_session_id: session.id,
      product: session.metadata?.product,
      total_amount: session.amount_total,
      currency: session.currency,
      status: "paid",
      shipping_address: shipping,
      billing_address: billing,
      customer_email: session.customer_details?.email || session.customer_email,
    });

    if (orderError) {
      console.error("ORDER INSERT ERROR:", JSON.stringify(orderError, null, 2));

      return NextResponse.json({ error: orderError }, { status: 500 });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook fatal error:", err);
    return new NextResponse("Webhook failed", { status: 500 });
  }
}
