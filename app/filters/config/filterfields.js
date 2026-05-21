export const FILTER_FIELDS = {
  bathtub: {
    range: ["length", "width", "height", "capacity", "price"],
    multi: ["color", "drain"],
  },
  faucet: {
    range: ["price"],
    multi: ["finish", "mount", "color"],
  },
};
