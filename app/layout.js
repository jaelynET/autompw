// app/layout.js
import Script from "next/script"; //

import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
export const metadata = {
  title: {
    template: "%s / AutoMPW",
    default: "AutoMPW",
  },
  description: "Find the right part replacement for your car",
};

export default function RootLayout({ children }) {
  const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en">
      {/* 1. Kept the head clean */}
      <head />
      {/* 2. Placed all child scripts and pages safely inside the body boundary */}
      <body>{children}</body>
      {/* Facebook Pixel Initialization */}
      {fbPixelId && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://facebook.net');
                fbq('init', '${fbPixelId}');
                fbq('track', 'PageView');
              `,
          }}
        />
      )}
    </html>
  );
}
