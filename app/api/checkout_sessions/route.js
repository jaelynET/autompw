import Stripe from "stripe";

// 1. Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req) {
  try {
    const { selectedColor } = await req.json();
    const headersList = await headers();
    const origin = headersList.get("origin");

    const shippingRate = await stripe.shippingRates.create({
      display_name: "Insured Tracked Shipping (Free)",
      type: "fixed_amount",
      fixed_amount: { amount: 0, currency: "usd" },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      metadata: {
        product: "magnetic-levitating-porsche",
        variant_color: selectedColor || "black",
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 3995,
            product_data: {
              name: "The AuraArc Magnetic Perpetual Calendar",
              description: `Finish: ${selectedColor === "black" ? "Black" : "White"}`,
              images: [
              "https://files.stripe.com/links/MDB8YWNjdF8xU1BWaldEN1o3Tk15ZWtzfGZsX2xpdmVfVTk4Z1l4czlncjdDWW41dXNNUGVWckVx00EfDbxMZD"
              ],
            },
          },
          quantity: 1,
        },
      ],
      shipping_options: [
        {
          shipping_rate: shippingRate.id,
        },
      ],

      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      billing_address_collection: "auto",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout route error:", error);

    return NextResponse.json(
      {
        error: "Checkout failed",
      },
      { status: 500 },
    );
  }
}
