import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const pluralMapping = {
  bathtub: "bathtubs",
  faucet: "faucets",
};

export default async function sitemap() {
  const baseUrl = "https://www.tubvilla.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/products",
    "/login",
    "/terms-and-conditions",
    "/shipping-policy",
    "/return-policy",
    "/contact",
    "/faq",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  let collectionRoutes = [];
  let subCategoryRoutes = [];
  let productRoutes = [];

  try {
    // 2. Fetch Categories (Concurrent Query)
    const categoriesPromise = supabase
      .from("categories")
      .select("slug, product_type");

    // 3. Fetch Products (Only select columns needed for the URL)
    const productsPromise = supabase
      .from("products")
      .select("slug, created_at");

    // Run both database calls at the exact same time to maximize speed
    const [categoriesResult, productsResult] = await Promise.all([
      categoriesPromise,
      productsPromise,
    ]);

    if (categoriesResult.error) throw categoriesResult.error;
    if (productsResult.error) throw productsResult.error;

    const getCollectionSlug = (type) => {
      if (!type) return "";
      const normalized = type.toLowerCase().trim();
      return pluralMapping[normalized] || `${normalized}s`;
    };

    // Process Category and Collection URLs
    if (categoriesResult.data) {
      const uniqueTypes = [
        ...new Set(
          categoriesResult.data.map((c) => c.product_type).filter(Boolean),
        ),
      ];

      collectionRoutes = uniqueTypes.map((type) => ({
        url: `${baseUrl}/collections/${getCollectionSlug(type)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

      subCategoryRoutes = categoriesResult.data.map((item) => ({
        url: `${baseUrl}/collections/${getCollectionSlug(item.product_type)}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
    }

    // 4. Process Individual Product URLs
    if (productsResult.data) {
      productRoutes = productsResult.data.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        // Use the actual last updated time from your DB, or fallback to today
        lastModified: product.created_at
          ? new Date(product.created_at)
          : new Date(),
        changeFrequency: "weekly",
        priority: 0.5, // Products have a slightly lower priority than categories
      }));
    }
  } catch (error) {
    console.error("Supabase sitemap generation error:", error);
  }

  // Combine everything into one single master array
  return [
    ...staticRoutes,
    ...collectionRoutes,
    ...subCategoryRoutes,
    ...productRoutes,
  ];
}
