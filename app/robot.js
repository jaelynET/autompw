export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Block API routes from being crawled
        "/checkout/", // Block checkout pages
        "/cart/", // Block shopping cart pages
      ],
    },
    sitemap: "https://www.autompw.com",
  };
}
