import Header from "@/app/_components/Header";
import { Inter } from "next/font/google";

import { CartProvider } from "../_components/CartContext";

import { FilterProvider } from "../_components/FilterContext";
import CartItems from "../_components/CartItems";
import Footer from "../_components/Footer";
import StripeElementsProvider from "../_components/StripeElementsProvider";
import { DomProvider } from "../_components/DomContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Import clean, versatile weights for a premium layout hierarchy
  weight: ["300", "400", "500", "600"],
});

export default function StoreLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ID;
  return (
    <div
      className={`${inter.className} antialiased flex flex-col min-h-screen w-full `}
    >
      <CartProvider>
        <Header />
        <FilterProvider>
          <CartItems />
          <StripeElementsProvider>
            <DomProvider>
              <main className="flex-1">{children}</main>
            </DomProvider>
          </StripeElementsProvider>
        </FilterProvider>
      </CartProvider>
      <Footer />
    </div>
  );
}
