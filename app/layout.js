// app/layout.js
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"; //
export const metadata = {
  title: {
    template: "%s / AutoMPW",
    default: "AutoMPW",
  },
  description: "Find the right part replacement for your car",

  verification: {
    google: "9zknx53onZ4ErzNfaUrI6KehgaIF1fizs4YNP56lpPs",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang="en">
      {/* 1. Kept the head clean */}
      <head />

      {/* 2. Placed all child scripts and pages safely inside the body boundary */}
      <body>
        {children}

        {gaId && <GoogleAnalytics gaId={gaId} />}

        {(adsId || gaId) && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                if (typeof gtag === 'undefined') {
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                }
                
                // 1. Core Google Ads configuration
                ${adsId ? `gtag('config', 'AW-${adsId}');` : ""}
                
                // 2. THIS IS THE FIX: Connects window.gtag to GA4 so sendGtagEvent works for purchases
                ${gaId ? `gtag('config', '${gaId}');` : ""}
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
