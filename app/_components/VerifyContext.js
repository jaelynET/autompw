"use client";

import { createContext, useContext, useState } from "react";

const VerifyContext = createContext();

function VerifyProvider({ children }) {
  const [isVerified, setIsVerified] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <VerifyContext.Provider
      value={{ isVerified, setIsVerified, show, setShow }}
    >
      {children}
    </VerifyContext.Provider>
  );
}

function useVerify() {
  const context = useContext(VerifyContext);
  if (context === undefined) throw new Error("Context is use outside provider");
  return context;
}

export { VerifyProvider, useVerify };
