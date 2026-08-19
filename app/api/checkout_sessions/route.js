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

    // const shippingRate = await stripe.shippingRates.create({
    //   display_name: "Insured Express Courier",
    //   type: "fixed_amount",
    //   fixed_amount: { amount: 1295, currency: "usd" },
    // });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      metadata: {
        product: "magnetic-levitating-porsche",
        variant_color: selectedColor || "red",
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 100,
            product_data: {
              name: "The Porsche 918 Levitation Display",
              description: `Finish: ${selectedColor === "gray" ? "Crayon Gray" : "Guards Red"}`,
              images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xU1BWaldEN1o3Tk15ZWtzfGZsX3Rlc3RfbXdWdDZkeE1aWktYTmVWN2tEV3F6YmZB00IdTcRJ27",
              ],
            },
          },
          quantity: 1,
        },
      ],
      // shipping_options: [
      //   {
      //     shipping_rate: shippingRate.id,
      //   },
      // ],

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
