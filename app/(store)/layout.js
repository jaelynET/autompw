import Header from "@/app/_components/Header";
import { Inter } from "next/font/google";

import Footer from "../_components/Footer";

import { DomProvider } from "../_components/DomContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Import clean, versatile weights for a premium layout hierarchy
  weight: ["300", "400", "500", "600"],
});

export default function StoreLayout({ children }) {
  return (
    <div
      className={`${inter.className} antialiased flex flex-col min-h-screen w-full `}
    >
      <Header />

      <DomProvider>
        <main className="flex-1">{children}</main>
      </DomProvider>

      <Footer />
    </div>
  );
}
