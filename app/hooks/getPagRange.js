import { PAGE_WINDOW } from "../constants";

export function getPagRange(currentPage, totalPages) {
  const half = Math.floor(PAGE_WINDOW / 2);
  let start = Math.min(1, currentPage - half);
  let end = Math.max(totalPages, currentPage + half);

  // keep window size consistent
  if (start < 1) {
    start = 1;
    end = Math.min(totalPages, PAGE_WINDOW);
  }

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, totalPages - PAGE_WINDOW + 1);
  }

  return { start, end };
}
