"use client";
// import { use } from "react";

import { useState, useTransition } from "react";
import { useFilter } from "./FilterContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDimensionFilters } from "./useDimensionFilters";
import SpinnerMini from "./SpinnerMini";
import RangeFilter from "./RangeFilter";

import CheckboxFilter from "./CheckboxFilter";
import SortSelect from "./SortSelect";

// import {
//   getAllFeatures,
//   getBathtubHeights,
//   getBathtubLengths,
//   getBathtubMaterial,
//   getBathtubWidths,
// } from "../_lib/data-service";
// import FilterLength from "./FilterLength";
// import Filter from "./Fliter";

function FilterItems({ numberResults, filterType, activeSort }) {
  const {
    setFilter,
    setFilterRanges,
    raw,
    width,
    length,
    height,
    price,
    capacity,
    drain,
    color,
  } = useDimensionFilters();

  const { filterLoading, setFilterLoading, filterCard, setFilterCard } =
    useFilter();

  const [showFilters, setShowFilters] = useState(false);
  // const [filterData, setFilterData] = useState({});

  // const [isPending, startTransition] = useTransition();

  return (
    <div className="w-full h-full top-0 fixed z-50 bg-white">
      <div
        className={`${
          filterLoading ? "opacity-25 fixed top-0 bg-white " : " "
        }`}
      >
        {filterLoading && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SpinnerMini />
          </div>
        )}

        <div className="flex justify-between mt-3 mx-3">
          <h3>Filters</h3>
          <button onClick={() => setFilterCard((show) => !show)}>
            <XMarkIcon className="h-5 w-5 " />
          </button>
        </div>

        <h3>Sort By:</h3>

        <SortSelect
          options={filterType.sorts}
          activeSort={activeSort}
          setFilterLoading={setFilterLoading}
        />

        {filterType.filters.map((filter) => {
          if (filter.type === "range") {
            return (
              <RangeFilter
                key={filter.filterKey}
                filterKey={filter.filterKey}
                loading={filterLoading}
                setFilterLoading={setFilterLoading}
                {...filter}
              />
            );
          }

          if (filter.type === "enum") {
            return (
              <CheckboxFilter
                key={filter.filterKey}
                filterKey={filter.filterKey}
                loading={filterLoading}
                setFilterLoading={setFilterLoading}
                {...filter}
              />
            );
          }
          return null;
        })}
      </div>
      <button
        className="rounded-md bg-button  px-2 py-2  md:mx-4 md:mt-1 "
        disabled={filterLoading}
        onClick={() => setFilterCard((show) => !show)}
      >
        <span>
          {filterLoading ? "Show results" : `Show ${numberResults} results`}
        </span>
      </button>
    </div>
  );
}

export default FilterItems;

/*  <section>
          <RangeFilter
            label="Length"
            presets={LENGTH_PRESETS}
            value={length}
            loading={filterLoading}
            onSelected={(range) => {
              setFilterLoading(true);
              setFilterRanges("length", range);
            }}
          />
        </section>
        <section>
          <RangeFilter
            label="Width"
            presets={WIDTH_PRESETS}
            value={width}
            loading={filterLoading}
            onSelected={(range) => {
              setFilterLoading(true);
              setFilterRanges("width", range);
            }}
          />
        </section>
        <section>
          <RangeFilter
            label="Height"
            presets={HEIGHT_PRESETS}
            value={height}
            loading={filterLoading}
            onSelected={(range) => {
              setFilterLoading(true);
              setFilterRanges("height", range);
            }}
          />
        </section>
        <section>
          <RangeFilter
            label="Price"
            presets={PRICE_PRESETS}
            value={price}
            loading={filterLoading}
            onSelected={(range) => {
              setFilterLoading(true);
              setFilterRanges("price", range);
            }}
          />
        </section>
        <section>
          <RangeFilter
            label="Capacity"
            presets={CAPACITY_PRESETS}
            value={capacity}
            loading={filterLoading}
            onSelected={(range) => {
              setFilterLoading(true);
              setFilterRanges("capacity", range);
            }}
          />
        </section>
        <section>
          <CheckboxFilter
            label="Drain Placement"
            options={DRAIN_OPTIONS}
            loading={filterLoading}
            values={drain}
            onToggle={(value) => {
              setFilterLoading(true);
              setFilter("drain", value);
            }}
          />
        </section>
        <section>
          <CheckboxFilter
            label="Color"
            options={COLOR_OPTIONS}
            loading={filterLoading}
            values={color}
            onToggle={(value) => {
              setFilterLoading(true);
              setFilter("color", value);
            }}
          />
        </section>*/

{
  /* <Filter
        lengths={lengths}
        widths={widths}
        heights={heights}
        materials={materials}
      /> */
}

{
  /*
 <div
        className={`${
          filterLoading ? "opacity-25 fixed top-0 bg-white " : " "
        }`}
      >
        {filterLoading && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SpinnerMini />
          </div>
        )}

        <div className="flex justify-between mt-3 mx-3">
          <h3>Filters</h3>
          <button onClick={() => setFilterCard((show) => !show)}>
            <XMarkIcon className="h-5 w-5 " />
          </button>
        </div>

        <div className="flex gap-52 ">
          <span className=" ml-3 mt-3">Width</span>

          {showFilters ? (
            <ChevronDownIcon
              className="h-5 w-5 self-end"
              onClick={() => setShowFilters((show) => !show)}
            />
          ) : (
            <ChevronRightIcon
              className="h-5 w-5 self-end"
              onClick={() => setShowFilters((show) => !show)}
            />
          )}
        </div>

        {showFilters && (
          <div>
            {widths.map((widths) => (
              <div className="flex gap-2 ml-3" key={widths}>
                <input
                  disabled={filterLoading}
                  type="checkbox"
                  onChange={(e) => {
                    setFilter("width", widths);
                    setFilterLoading((show) => !show);
                  }}
                  // checked={width.includes(widths)}
                  // checked={width}
                />
                <p>{widths}</p>
              </div>
            ))}
          </div>
        )}
      </div>  */
}
