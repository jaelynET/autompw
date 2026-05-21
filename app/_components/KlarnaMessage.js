"use client";
import { PaymentMethodMessagingElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function KlarnaMessage({ amount }) {
  return (
    <PaymentMethodMessagingElement
      options={{
        paymentMethodTypes: ["klarna"],
        amount: amount, // in cents
        currency: "USD",
      }}
    />
  );
}
