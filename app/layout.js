import Script from "next/script";
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    template: "%s / AutoMPW",
    default: "AutoMPW",
  },
};

export default function RootLayout({ children }) {
  const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang="en">
      <head>
        {/* 
          🚀 THE CROWN JEWEL PAGESPEED FIX: 
          By placing this inside an open <head> tag, the browser reads this 
          on line 1. It downloads your 394KB WebM video in parallel with your 
          CSS layout files, dragging your LCP right into the green zone.
        */}
        <link rel="preload" href="/loop-vid.mp4" as="video" type="video/mp4" />
      </head>
      <body>
        {children}

        {/* Facebook Pixel Initialization */}
        {fbPixelId && (
          <Script
            id="fb-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); 
                fbq('set', 'autoConfig', false, '${fbPixelId}'); 
                fbq('init', '${fbPixelId}'); 
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {gaId && <GoogleAnalytics gaId={gaId} />}

        {/* Link Google Ads to the existing tracking script */}
        {adsId && (
          <Script
            id="google-ads"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                if (typeof window.gtag !== 'function') {
                  window.gtag = function(){window.dataLayer.push(arguments);}
                }
                window.gtag('js', new Date());
                window.gtag('config', 'AW-${adsId}');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
