export function parseRange(range) {
  if (!range) return null;

  const [min, max] = range.split("-").map(Number);

  return {
    min,
    max,
  };
}
