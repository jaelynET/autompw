"use client";

import { createContext, useContext, useEffect, useState } from "react";
const DomContext = createContext();

function DomProvider({ children }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <DomContext.Provider value={{ domLoaded }}>{children}</DomContext.Provider>
  );
}

function useDom() {
  const context = useContext(DomContext);
  if (context === undefined)
    throw new Error("Context is used outside provider");
  return context;
}

export { DomProvider, useDom };
