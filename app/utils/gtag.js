export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;
export const ADS_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

// Core engine to pass safe window events to Google
export const sendGtagEvent = (eventName, params) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};
