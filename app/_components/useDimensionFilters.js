"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useFilter } from "./FilterContext";
import { useTransition } from "react";

export function useDimensionFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const { setFilterLoading } = useFilter();
  const [isPending, startTransition] = useTransition();

  function parseRange(range) {
    if (!range) return null;

    const [min, max] = range.split("-").map(Number);

    return {
      min,
      max,
    };
  }

  function setFilterRanges(key, value) {
    const newParams = new URLSearchParams(params);

    if (!value) {
      newParams.delete(key);
    } else {
      newParams.set(key, `${value.min}-${value.max}`);
    }

    startTransition(() => {
      router.replace("?" + newParams.toString());
      setFilterLoading(false);
    });
  }

  function setFilter(key, value) {
    const newParams = new URLSearchParams(params);

    if (key === "sort") {
      newParams.set(key, value); // replaces existing
    } else {
      const existing = newParams.getAll(key);

      if (existing.includes(value)) {
        // remove only this value
        const updated = existing.filter((v) => v !== value);
        newParams.delete(key); // remove all values of key
        updated.map((v) => newParams.append(key, v)); // re-add remaining from updated
      } else {
        newParams.append(key, value);
      }
    }
    startTransition(() => {
      router.replace("?" + newParams.toString());
      setFilterLoading(false);
    });
  }

  return {
    length: parseRange(params.get("length")),
    width: parseRange(params.get("width")),
    height: parseRange(params.get("height")),
    price: parseRange(params.get("price")),
    capacity: parseRange(params.get("capacity")),

    // enum
    drain: params.getAll("drain"),
    color: params.getAll("color"),
    finish: params.getAll("finsih"),
    mount: params.getAll("mount"),

    // Sort by
    sort: params.get("sort"),

    setFilter,
    setFilterRanges,
  };
}
