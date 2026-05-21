"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFilter } from "./FilterContext";
import FilterItems from "./FilterItems";

function Filter({ numberResults, filterType, activeSort }) {
  const { filterCard, setFilterCard } = useFilter();
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // // const pathname = usePathname();
  // function handleFilter(filter, filterKey) {
  //   const searchParams2 = new URLSearchParams(window.location.search);
  //   console.log(searchParams2);
  //   searchParams2.append(filter, filterKey);
  //   const newUrl = `${window.location.pathname}?${searchParams2.toString()}`;
  //   router.push(newUrl, {
  //     scroll: false,
  //   });
  // }

  return (
    <div>
      <button
        className="px-4 ml-19 md:hidden border-2 border-gray-200 rounded-sm mb-2 mt-2"
        onClick={() => setFilterCard(true)}
      >
        <p className="text-base"> Sort & Filter </p>
      </button>
      {filterCard && (
        <FilterItems
          numberResults={numberResults}
          filterType={filterType}
          activeSort={activeSort}
        />
      )}
    </div>
  );
}

export default Filter;

// <div>
//       <FilterLength lengths={lengths} handleFilter={handleFilter} />
//     </div>
//     <div>
//       <FilterWidth widths={widths} handleFilter={handleFilter} />
//     </div>
//     <div>
//       <FilterHeight heights={heights} handleFilter={handleFilter} />
//     </div>
//     <div>
//       <FilterMaterial materials={materials} handleFilter={handleFilter} />
//     </div>
