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
      <head />
      <body>
        {children}

        {/* 
          1. PERFORMANCE FIX: Shifted tracking scripts to 'lazyOnload'.
          This instructs Next.js to wait until the browser is completely idle 
          and all core components (Swiper, images, headers) are parsed.
        */}
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

        {/* 
          2. PERFORMANCE FIX: Wrapped Google Analytics in a structural wrapper 
          or allowed Next.js to parse it lower down the execution stack.
        */}
        {gaId && <GoogleAnalytics gaId={gaId} />}

        {/* 3. PERFORMANCE FIX: Delayed Google Ads configuration to clear up the thread */}
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
