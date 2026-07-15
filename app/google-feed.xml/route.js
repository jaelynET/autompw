import { product } from "../constants";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>AutoMPW</title>
    <link>https://autompw.com</link>
    <description>Google Shopping Feed</description>

    <item>
      <g:id>${product.specifications.mpn}</g:id>
      <g:title><![CDATA[${product.title}]]></g:title>
      <g:description><![CDATA[${product.description}]]></g:description>
      <g:link>https://autompw.com</g:link>
      <g:image_link>https://autompw.com${product.gallery[0].image}</g:image_link>
      <g:availability>in stock</g:availability>
      <g:condition>new</g:condition>
      <g:price>${(product.pricing.price / 100).toFixed(2)} USD</g:price>
      <g:brand>AutoMPW</g:brand>
      <g:mpn>${product.specifications.mpn}</g:mpn>
      <g:identifier_exists>false</g:identifier_exists>
    </item>

  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
