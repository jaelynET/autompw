import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
function ProductInstallDocs({ product, selectedVariant }) {
  const { installation_manual_url, spec_sheet_url, assemmble_video, category } =
    selectedVariant;
  return (
    <div className="flex flex-col sm:flex-row gap-3 my-6">
      <Link
        href={installation_manual_url}
        className="flex items-center justify-center gap-2 flex-1 rounded-md border border-stone-200 bg-stone-50 py-3 px-4 text-sm font-semibold text-stone-700 transition-all hover:bg-stone-100 hover:border-stone-300"
      >
        <svg
          className="w-4 h-4 text-stone-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span>Installation Sheet</span>
      </Link>

      <Link
        href={spec_sheet_url}
        className="flex items-center justify-center gap-2 flex-1 rounded-md border border-stone-200 bg-stone-50 py-3 px-4 text-sm font-semibold text-stone-700 transition-all hover:bg-stone-100 hover:border-stone-300"
      >
        <svg
          className="w-4 h-4 text-stone-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span>Specification Sheet</span>
      </Link>
    </div>
  );
}

export default ProductInstallDocs;
