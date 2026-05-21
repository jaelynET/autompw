"use client";
import { useDimensionFilters } from "./useDimensionFilters";

function SortSelect({ options, activeSort, setFilterLoading }) {
  const { setFilter, sort } = useDimensionFilters();

  return (
    <select
      value={activeSort}
      onChange={(e) => {
        setFilter("sort", e.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortSelect;
