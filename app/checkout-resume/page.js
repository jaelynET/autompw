"use client";

import { useEffect } from "react";

export default function CheckoutResume() {
  useEffect(() => {
    const savedCart = localStorage.getItem("checkoutCart");

    if (!savedCart) {
      window.location.href = "/";
      return;
    }

    fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: JSON.parse(savedCart),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = data.url;
      });
  }, []);

  return <p>Redirecting to checkout...</p>;
}
