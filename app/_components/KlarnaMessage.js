"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentMethodMessagingElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function KlarnaMessage({ amount }) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!amount) return null;

  const totalAmount = Math.round(amount);

  return (
    <div className="relative min-h-[40px]">
      {/* Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse rounded-md bg-stone-200" />
      )}

      <Elements stripe={stripePromise} key={totalAmount}>
        <PaymentMethodMessagingElement
          options={{
            amount: totalAmount,
            currency: "USD",
            countryCode: "US",
          }}
          onReady={() => setIsLoading(false)}
          className={isLoading ? "opacity-0" : "opacity-100 transition-opacity"}
        />
      </Elements>
    </div>
  );
}
