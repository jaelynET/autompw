export function normalizeProductType(collection) {
  const map = {
    bathtubs: "bathtub",
    faucets: "faucet",
  };

  return map[collection] || null;
}
