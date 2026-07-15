import Header from "@/app/_components/Header";
import { Rubik } from "next/font/google";
import { CartProvider } from "../_components/CartContext";

import { FilterProvider } from "../_components/FilterContext";
import CartItems from "../_components/CartItems";
import Footer from "../_components/Footer";
import StripeElementsProvider from "../_components/StripeElementsProvider";
import { DomProvider } from "../_components/DomContext";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: "400",
});

export default function StoreLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ID;
  return (
    <div
      className={`${rubik.className} antialiased flex flex-col min-h-screen w-full `}
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
