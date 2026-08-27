import Link from "next/link";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 min-[375px]:px-8 min-[425px]:px-11 py-12 md:py-16">
        <nav className="grid grid-cols-1 gap-10 sm:grid-cols-3 border-b border-stone-100 pb-12">
          {/* Section 1: Directory */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 font-mono mb-4">
              Registry Overview
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  About the Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  Contact Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-xs text-stone-500 hover:text-stone-950 transition tracking-wide"
                >
                  Technical FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Policies */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 font-mono mb-4">
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

          {/* Section 3: Concierge Support */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 font-mono mb-4">
              Concierge Support
            </h3>
            <ul className="space-y-2 text-xs text-stone-500 tracking-wide font-normal">
              <li className="font-mono text-[11px] text-stone-800">
                510-977-0587
              </li>
              <li className="break-all font-mono text-[11px] text-stone-800">
                support@autompw.com
              </li>
              <li className="text-stone-400 text-[11px] pt-1">
                Mon, Wed, Fri / 11AM – 1PM PST
              </li>
            </ul>
          </div>
        </nav>

        {/* Bottom Metadata Ledger */}
        <div className="mt-8 text-[11px] text-stone-400 font-mono tracking-wide flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AutoMPW. Architectural Edition.</p>
          <p className="text-[10px] text-stone-300">Form follows function.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
