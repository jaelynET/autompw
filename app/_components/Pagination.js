"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"; // Install if missing, or use custom arrows
import { getPagRange } from "../hooks/getPagRange";

function Pagination({ totalPages }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { start, end } = getPagRange(currentPage, totalPages);

  function handlePageChange(targetPage) {
    const params = new URLSearchParams(searchParams);
    params.set("page", targetPage);
    router.replace(`${pathname}?${params}`);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="w-full flex items-center justify-center border-t border-stone-200 pt-6 mt-12">
      <nav
        className="flex items-center gap-1 sm:gap-2"
        aria-label="Pagination Navigation"
      >
        {/* --- PREVIOUS BUTTON --- */}
        <button
          type="button"
          onClick={() =>
            handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
          }
          disabled={currentPage === 1}
          className="flex h-9 items-center gap-1 rounded-md px-2.5 text-sm font-medium text-stone-600 transition-all select-none
            disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 active:scale-[0.98] cursor-pointer"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* --- FIRST PAGE SHORTCUT --- */}
        {start > 1 && (
          <>
            <button
              type="button"
              onClick={() => handlePageChange(1)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 cursor-pointer"
            >
              1
            </button>
            {start > 2 && (
              <span className="px-1 text-stone-400 text-sm select-none">…</span>
            )}
          </>
        )}

        {/* --- NUMERICAL PAGE RANGE LIST --- */}
        {Array.from({ length: end - start + 1 }).map((_, i) => {
          const page = start + i;
          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              aria-current={isCurrent ? "page" : undefined}
              className={`
                flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold transition-all select-none cursor-pointer
                ${
                  isCurrent
                    ? "bg-button text-white shadow-sm font-bold"
                    : "text-stone-700 hover:bg-stone-100 font-medium"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* --- LAST PAGE SHORTCUT --- */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span className="px-1 text-stone-400 text-sm select-none">…</span>
            )}
            <button
              type="button"
              onClick={() => handlePageChange(totalPages)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 cursor-pointer"
            >
              totalPages
            </button>
          </>
        )}

        {/* --- NEXT BUTTON --- */}
        <button
          type="button"
          onClick={() =>
            handlePageChange(
              currentPage === totalPages ? totalPages : currentPage + 1,
            )
          }
          disabled={currentPage === totalPages}
          className="flex h-9 items-center gap-1 rounded-md px-2.5 text-sm font-medium text-stone-600 transition-all select-none
            disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 active:scale-[0.98] cursor-pointer"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
