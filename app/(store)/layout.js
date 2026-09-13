import { Inter } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "../_components/Footer";
import { DomProvider } from "../_components/DomContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function StoreLayout({ children }) {
  return (
    <div
      className={`${inter.className} antialiased flex flex-col min-h-screen w-full`}
    >
      {/* 2. Moved DomProvider to wrap the entire viewport tree for coordinated client-side mounting */}
      <DomProvider>
        <Header />

        {/* 3. Added a layout containment strategy to prevent dynamic content shifts */}
        <main className="flex-1 w-full contain-intrinsic-size">{children}</main>

        <Footer />
      </DomProvider>
    </div>
  );
}
