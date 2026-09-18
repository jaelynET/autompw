import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { selectedFinish, pendantCount, engravingText } = await req.json();
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Calculate dynamic product values server-side to prevent client tamper alterations
    const baseAmount = 3495; // \$34.95
    const upsellAmount =
      pendantCount === 2 ? 1000 : pendantCount === 3 ? 2000 : 0;
    const finalUnitAmount = baseAmount + upsellAmount;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // 🌟 SECURE INGESTION: Passes options straight into order tracking records
      metadata: {
        product: "custom-pet-necklace",
        finish: selectedFinish || "Gold",
        pendant_count: String(pendantCount || 1),
        custom_engraving: engravingText || "None",
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: finalUnitAmount,
            product_data: {
              name: `AutoMPW Custom Pet Keepsake Necklace`,
              description: `Finish: ${selectedFinish || "Gold"} | Pendants: ${pendantCount || 1} | Engraving: ${engravingText || "None"}`,

              images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xU1BWaldEN1o3Tk15ZWtzfGZsX2xpdmVfVTNJd1lKS1FGU2VFRHZJeDlzNU1IUkRI00SfJ30ZvU",
              ],
            },
          },
          quantity: 1,
        },
      ],
      // 🟢 ELIMINATED LATENCY: Uses fast native Stripe toggle instead of making custom API shipping requests
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU"],
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
