import Script from "next/script";
import "@/app/globals.css";

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
        {/* 🚀 CRITICAL RE-INJECTION: Preload the critical above-the-fold hero asset */}
        <link rel="preload" href="/loop-vid.mp4" as="video" type="video/mp4" />

        {fbPixelId && (
          <>
            <link
              rel="preconnect"
              href="https://connect.facebook.net"
              crossOrigin="anonymous"
            />
            <link rel="dns-prefetch" href="https://connect.facebook.net" />
          </>
        )}
      </head>
      <body>
        {children}

        {/* 🚀 FACEBOOK PIXEL */}
        {fbPixelId && (
          <>
            <Script
              id="fb-pixel-init"
              // PERFORMANCE FIX: Delayed to idle time so it doesn't hijack initial layouts
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  if(!window.fbq){
                    function n(){
                      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if(!window._fbq) window._fbq=n;
                    n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[];
                    window.fbq=n;
                  }
                  fbq('set', 'autoConfig', false, '${fbPixelId}');
                  fbq('init', '${fbPixelId}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <Script
              id="fb-pixel-source"
              strategy="lazyOnload" // PERFORMANCE FIX
              src="https://connect.facebook.net/en_US/fbevents.js"
            />
          </>
        )}

        {/* 🚀 GOOGLE ANALYTICS */}
        {gaId && (
          <>
            <Script
              id="google-analytics-base"
              strategy="lazyOnload" // PERFORMANCE FIX
              src={`https://googletagmanager.com{gaId}`} // Fixed raw domain path link structure
            />
            <Script
              id="google-analytics-init"
              strategy="lazyOnload" // PERFORMANCE FIX
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}

        {/* 🚀 GOOGLE ADS */}
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
