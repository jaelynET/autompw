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

  return (
    <html lang="en">
      <head>
        {/* Preload your critical above-the-fold hero video asset */}
        <link rel="preload" href="/loop-vid.mp4" as="video" type="video/mp4" />

        {fbPixelId && (
          <>
            <link
              rel="preconnect"
              href="https://connect.facebook.net" // 🚀 FIXED: Added correct connect prefix
              crossOrigin="anonymous"
            />
            <link rel="dns-prefetch" href="https://connect.facebook.net" />
          </>
        )}

        {/* Warm up the network connection to Microsoft Clarity servers */}
        <link
          rel="preconnect"
          href="https://b.clarity.ms"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}

        {/* 🚀 FACEBOOK PIXEL */}
        {fbPixelId && (
          <>
            <Script
              id="fb-pixel-init"
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
              strategy="lazyOnload"
              src="https://connect.facebook.net/en_US/fbevents.js" // 🚀 FIXED: Corrected domain path
            />
          </>
        )}

        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0]; // 🚀 CRITICAL FIX: Restored [0] index selector securely
        y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yj1fgn1thx");
  `}
        </Script>
      </body>
    </html>
  );
}
