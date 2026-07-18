// app/layout.js
import "@/app/globals.css";

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
      <head />
      <body>
        {children}

        {/* 1. We remove <GoogleAnalytics /> because we are initializing it natively below */}

        {/* 2. Combined Native Initialization Script */}
        {(gaId || adsId) && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Inject the main Google Tag script loader using your GA4 ID
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://googletagmanager.com{gaId || adsId}';
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                if (typeof gtag === 'undefined') {
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                }

                // Initialize tracking configurations safely
                gtag('js', new Date());
                ${gaId ? `gtag('config', '${gaId}');` : ""}
                ${adsId ? `gtag('config', 'AW-${adsId}');` : ""}
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
