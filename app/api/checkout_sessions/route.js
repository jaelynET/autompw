import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { selectedFinish } = await req.json();
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Clear, non-negotiable unit pricing framework
    const finalUnitAmount = 4900; // \$49.00 flat

    // Capitalize variation inputs for clean Stripe Invoice processing presentation
    const displayFinish =
      selectedFinish === "white" ? "Monolith White" : "Matte Black";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      // Structural order tracking data injection layer
      metadata: {
        product: "magnetic-perpetual-calendar",
        finish: displayFinish,
      },

      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: finalUnitAmount,
            product_data: {
              name: `Magnetic Perpetual Calendar`,
              description: `Finish: ${displayFinish} // Series 01`,
              // Clean placeholder mockup reference matching selection
              images: [
                selectedFinish === "white"
                  ? "https://files.stripe.com/links/MDB8YWNjdF8xU1BWaldEN1o3Tk15ZWtzfGZsX2xpdmVfRnFFTFV5QTZJa1pCdGhNZ2hJb1BNSnln0090Ay6QcQ"
                  : "https://files.stripe.com/links/MDB8YWNjdF8xU1BWaldEN1o3Tk15ZWtzfGZsX2xpdmVfVTk4Z1l4czlncjdDWW41dXNNUGVWckVx00EfDbxMZD",
              ],
            },
          },
          quantity: 1,
        },
      ],

      // High-performance direct delivery localization fields
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      billing_address_collection: "auto",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout server compilation route error:", error);
    return NextResponse.json(
      { error: "Internal checkout initialization failed" },
      { status: 500 },
    );
  }
}
