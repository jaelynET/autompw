import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 min-[375px]:px-8 min-[425px]:px-11 py-12 md:py-16">
        <nav className="grid grid-cols-1 gap-10 sm:grid-cols-3 border-b border-stone-100 pb-12">
          {/* Section 1: Policies */}
          <div>
            {/* 🌟 CONTRAST FIX: Changed text-stone-400 to text-stone-500 */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 font-mono mb-4">
              Legal Parameters
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  Shipping Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  Return Mandate
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Studio Support */}
          <div>
            {/* 🌟 CONTRAST FIX: Changed text-stone-400 to text-stone-500 */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 font-mono mb-4">
              Studio Support
            </h3>
            <ul className="space-y-2 text-xs text-stone-500 tracking-wide font-normal">
              <li className="font-mono text-xs text-stone-800 font-medium break-all">
                support@autompw.com
              </li>
              {/* 🌟 CONTRAST FIX: Changed text-stone-400 to text-stone-500 */}
              <li className="text-stone-500 text-xs pt-1 leading-normal">
                Our design studio processes support tickets 7 days a week.
                Response time is typically under 12 hours.
              </li>
            </ul>
          </div>

          {/* Section 3: Studio Mandate */}
          <div>
            {/* 🌟 CONTRAST FIX: Changed text-stone-400 to text-stone-500 */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 font-mono mb-4">
              Studio Mandate
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed font-normal max-w-xs">
              Every keepsake is individually processed, cropped, and
              laser-engraved to preserve your pet's likeness forever. Form
              follows function.
            </p>
          </div>
        </nav>

        {/* Bottom Metadata Ledger */}
        {/* 🌟 CONTRAST FIX: Changed parent text-stone-400 to text-stone-500, and copyright text-stone-300 to text-stone-400 */}
        <div className="mt-8 text-xs text-stone-500 font-mono tracking-wide flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AutoMPW. Architectural Edition.</p>
          <p className="text-xs text-stone-400">Form follows function.</p>
        </div>
      </div>
    </footer>
  );
}
