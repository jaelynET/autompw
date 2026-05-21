"use client";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterLoading, setFilterLoading] = useState(false);
  const [filterCard, setFilterCard] = useState(false);

  return (
    <FilterContext.Provider
      value={{ filterCard, setFilterCard, filterLoading, setFilterLoading }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("Context is used outside provider");
  return context;
}

export { FilterProvider, useFilter };
