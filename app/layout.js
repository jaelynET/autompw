// app/layout.js
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"; //
export const metadata = {
  title: {
    template: "%s / TubVilla",
    default: "TubVilla",
  },
  description:
    "A collection of beautiful and luxurious freestanding bathtubs, designed to transform and elevate your bathroom",

  icon: "@/public/tubicon.jpg",
};
export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  return (
    <html lang="en">
      <body>{children}</body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {adsId && (
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${adsId}');
          `}
        </Script>
      )}
    </html>
  );
}
