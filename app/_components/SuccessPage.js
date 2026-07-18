"use client";
import { Suspense, useEffect } from "react";
import { useCart } from "./CartContext";
import Link from "next/link";

import {
  CheckCircleIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function SuccessPage({ customerEmail }) {
  return (
    <div className="max-w-xl mx-auto my-8 bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-neutral-200 shadow-2xl">
      {/* Visual Success Indicator */}
      <div className="flex items-center gap-4 border-b border-neutral-800 pb-6 mb-6">
        <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight uppercase text-white">
            Order Confirmed
          </h1>
          <p className="text-sm text-neutral-400">Thank you for your order</p>
        </div>
      </div>

      {/* Main Confirmation Content */}
      <div className="space-y-6 text-sm leading-relaxed text-neutral-300">
        <p>
          We appreciate your business! A confirmation email containing your
          receipt, tracking information, and order breakdown will be sent to{" "}
          <strong className="text-emerald-400 font-medium">
            {customerEmail}
          </strong>{" "}
          shortly.
        </p>

        {/* Support Callout Box */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <EnvelopeIcon className="w-4 h-4 text-emerald-400" /> Need Technical
            Support?
          </div>
          <p className="text-xs text-neutral-400 m-0">
            For modifications, fitment questions, or shipping updates, reach out
            to our team:
          </p>
          <a
            href="mailto:autompwsupport@gmail.com"
            className="text-sm font-medium text-white hover:text-emerald-400 transition-colors flex items-center gap-1 group self-start"
          >
            autompwsupport@gmail.com
            <ArrowRightIcon className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
