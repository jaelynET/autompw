export function applySort(query, sort) {
  switch (sort) {
    case "price_asc":
      return query.order("regularPrice", { ascending: true });

    case "price_desc":
      return query.order("regularPrice", { ascending: false });

    case "newest":
      return query.order("created_at", { ascending: false });

    case "rating":
      return query
        .order("averageRating", { ascending: false, nullsFirst: false })
        .order("reviewCount", { ascending: false, nullsFirst: false });

    case "best_sellers":
      // channge to salesCount
      return query.order("reviewCount", {
        ascending: false,
        nullsFirst: false,
      });

    default:
      return query; // fallback
  }
}
