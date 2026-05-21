import { faucetsConfig } from "./faucets";
import { tubsConfig } from "./tubs";

export function getCategoryConfig(productType) {
  if (productType === "bathtub") return tubsConfig;
  if (productType === "faucet") return faucetsConfig;
  return { filters: [] };
}
