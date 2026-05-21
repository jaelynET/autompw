import { FILTER_FIELDS } from "./filterfields";
import { parseMulti } from "./parseMulti";

export function buildfilters(searchParams, productType, categorySlug) {
  const config = FILTER_FIELDS[productType];
  const filters = {
    slug: categorySlug,
    sort: searchParams.sort ?? null,
  };

  function parseRange(range) {
    if (!range) return null;

    const [min, max] = range.split("-").map(Number);

    return {
      min,
      max,
    };
  }

  config.range.forEach((key) => {
    filters[key] = parseRange(searchParams[key]);
  });

  config.multi.forEach((key) => {
    filters[key] = parseMulti(searchParams[key]);
  });
  return filters;
}
