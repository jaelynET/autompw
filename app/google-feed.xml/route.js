import { createClient } from "@supabase/supabase-js";

export const revalidate = 3600;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function GET() {
  const { data: variants, error } = await supabase.from("product_variants")
    .select(`
      *,
      products (
        title,
        description,
        slug,
        brand
      ),
      inventory (
        quantity
      )
    `);

  if (error) {
    return new Response("Feed error", {
      status: 500,
    });
  }

  const items = variants
    ?.filter((variant) => variant.inventory?.quantity > 0)
    .map((variant) => {
      const product = variant.products;

      const titleParts = [
        product.title,
        variant.colorFinish,
        variant.nominal_size,
      ].filter(Boolean);

      const title = titleParts.join(" - ");

      const quantity = variant.inventory?.quantity || 0;

      const availability = quantity > 0 ? "in stock" : "out of stock";

      return `
        <item>

          <g:id>
            ${variant.manufacturer_part_number}
          </g:id>

          <g:item_group_id>
            ${variant.productId}
          </g:item_group_id>

          <title><![CDATA[
            ${title}
          ]]></title>

          <description><![CDATA[
            ${product.description || ""}
          ]]></description>

          <link>
            https://tubvilla.com/products/${product.slug}
          </link>

          <g:image_link>
            ${variant.image}
          </g:image_link>

          <g:availability>
            ${availability}
          </g:availability>

          <g:condition>
            new
          </g:condition>

          <g:price>
            ${variant.regularPrice} USD
          </g:price>

          <g:brand>
            ${product.brand || "TubVilla"}
          </g:brand>

          ${variant.upc ? `<g:gtin>${variant.upc}</g:gtin>` : ""}

          ${
            variant.colorFinish
              ? `<g:color>${variant.colorFinish}</g:color>`
              : ""
          }

          ${
            variant.nominal_size
              ? `<g:size>${variant.nominal_size}</g:size>`
              : ""
          }

          <g:mpn>
            ${variant.manufacturer_part_number}
          </g:mpn>

        </item>
      `;
    })
    .join("");

  const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss
      version="2.0"
      xmlns:g="http://base.google.com/ns/1.0"
    >
      <channel>

        <title>
          TubVilla
        </title>

        <link>
          https://tubvilla.com
        </link>

        <description>
          Google Shopping Feed
        </description>

        ${items}

      </channel>
    </rss>
  `;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
