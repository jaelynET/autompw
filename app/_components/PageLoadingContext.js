"use client";
const { createContext, useState, useContext } = require("react");

const PageLoadingContext = createContext();

function PageLoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <PageLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PageLoadingContext.Provider>
  );
}

function usePageLoading() {
  const context = useContext(PageLoadingContext);
  if (context === undefined)
    throw new Error("Context is used outside provider");
  return context;
}
export { PageLoadingProvider, usePageLoading };
