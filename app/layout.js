// app/layout.js
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"; //
export const metadata = {
  title: {
    template: "%s / AutoMPW",
    default: "AutoMPW",
  },
  description: "",
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

        {adsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                if (typeof gtag === 'undefined') {
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                }
                gtag('config', 'AW-${adsId}');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
