export function parseMulti(filter) {
  if (!filter) return null;
  console.log(filter);

  if (!Array.isArray(filter)) {
    const s = filter.split();
    return s;
  } else {
    return filter;
  }
}
