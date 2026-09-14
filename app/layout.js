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
        {/* Optimized preconnect elements only. No heavy file preloads. */}
        {fbPixelId && (
          <>
            <link
              rel="preconnect"
              href="https://facebook.net"
              crossOrigin="anonymous"
            />
            <link rel="dns-prefetch" href="https://facebook.net" />
          </>
        )}
      </head>
      <body>
        {children}

        {/* 🚀 SPEED SAVER: Runs lazily to give your hero layout maximum load priority */}
        {fbPixelId && (
          <Script
            id="fb-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e); s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://facebook.net/en_US/fbevents.js'); 
                fbq('set', 'autoConfig', false, '${fbPixelId}'); 
                fbq('init', '${fbPixelId}'); 
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              id="google-analytics-base"
              strategy="lazyOnload"
              src={`https://googletagmanager.com{gaId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="lazyOnload"
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

        {/* Google Ads */}
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
