import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer */}
        <nav className="grid grid-cols-1 gap-10 sm:grid-cols-3 border-b border-stone-200 pb-12">
          {/* CUSTOMER CARE */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-900 font-mono mb-4">
              Customer Care
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-xs text-stone-600 hover:text-stone-950 transition-colors tracking-wide"
                >
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/return-policy"
                  className="text-xs text-stone-600 hover:text-stone-950 transition-colors tracking-wide"
                >
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-xs text-stone-600 hover:text-stone-950 transition-colors tracking-wide"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-stone-600 hover:text-stone-950 transition-colors tracking-wide"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-900 font-mono mb-4">
              Contact
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@autompw.com"
                  className="text-xs font-mono text-stone-800 hover:text-stone-950 transition-colors"
                >
                  support@autompw.com
                </a>
              </li>

              <li className="text-xs text-stone-600 leading-relaxed max-w-xs">
                Questions about your order or product? We&apos;re here to help.
              </li>

              <li className="text-xs text-stone-500">
                Typical response time: under 12 hours.
              </li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-900 font-mono mb-4">
              About
            </h3>

            <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
              Thoughtful objects designed to bring function and simplicity into
              everyday spaces.
            </p>
          </div>
        </nav>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone-600 font-mono tracking-wide">
            © {new Date().getFullYear()} AutoMPW. All rights reserved.
          </p>

          <p className="text-xs text-stone-500 tracking-wide">
            Form follows function.
          </p>
        </div>
      </div>
    </footer>
  );
}
