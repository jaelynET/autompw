import {
  Cabin,
  Geist,
  Geist_Mono,
  Inter,
  PT_Serif,
  Roboto_Flex,
} from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/_components/Header";
import {
  Rubik,
  Montserrat,
  Oswald,
  Schibsted_Grotesk,
  Jost,
  Playfair_Display,
  Cormorant_Garamond,
  Noto_Serif,
  Montserrat,
} from "next/font/google";
import { CartProvider } from "../_components/CartContext";
import { PageLoadingProvider } from "../_components/PageLoadingContext";
import RouteLoader from "../RouteLoader";
import { FilterProvider } from "../_components/FilterContext";
import CartItems from "../_components/CartItems";
import Footer from "../_components/Footer";
import StripeElementsProvider from "../_components/StripeElementsProvider";
import { DomProvider } from "../_components/DomContext";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
// );

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Serif
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "400",
});

// Sans-Serif

const sanss = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const marcellus = PT_Serif({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

// const rubik = Rubik({
//   display: "swap",
//   subsets: ["latin"],
// });

const oswald = Oswald({
  display: "swap",
  subsets: ["latin"],
  weight: "300",
});

export const metadata = {
  title: {
    template: "%s / TubVilla",
    default: "TubVilla",
  },
  description: "Beautiful home products",

  icon: "@/public/tubicon.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} antialiased  `}>
        <div className="flex flex-col min-h-screen w-full">
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
      </body>
    </html>
  );
}

// <body className={`${playfairDisplay.className} antialiased f `}>
