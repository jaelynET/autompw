import Stripe from "stripe";

// 1. Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      metadata: {
        product: "2003-2006-chevy-silverado-headlights",
      },
      line_items: [
        {
          price: process.env.STRIPE_HEADLIGHT_PRICE_ID,
          quantity: 1,
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
