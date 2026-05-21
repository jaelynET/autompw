"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDimensionFilters } from "./useDimensionFilters";

function RangeFilter({ label, presets, filterKey, loading, setFilterLoading }) {
  const filters = useDimensionFilters();
  const value = filters[filterKey];
  const [open, setOpen] = useState(false);

  function onSelected(range) {
    setFilterLoading(true);
    filters.setFilterRanges(filterKey, range);
  }

  return (
    <div>
      <div className="flex gap-4">
        <span>{label}</span>
        <span>
          {open ? (
            <ChevronDownIcon
              className="h-5 w-5 self-end"
              onClick={() => setOpen((show) => !show)}
            />
          ) : (
            <ChevronRightIcon
              className="h-5 w-5 self-end"
              onClick={() => setOpen((show) => !show)}
            />
          )}
        </span>
      </div>
      {open && (
        <div>
          {presets.map((preset) => {
            const isChecked =
              value?.min === preset.min && value?.max === preset.max;
            return (
              <label key={preset.label} className="flex">
                <input
                  disabled={loading}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    if (isChecked) {
                      onSelected(null);
                    } else {
                      onSelected({ min: preset.min, max: preset.max });
                    }
                  }}
                />
                <span className="text-sm">{preset.label}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default RangeFilter;
