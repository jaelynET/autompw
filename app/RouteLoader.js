"use client";

import { usePathname } from "next/navigation";
import { usePageLoading } from "./_components/PageLoadingContext";
import { useEffect } from "react";
import NProgress from "nprogress";

import "nprogress/nprogress.css"; // ensure CSS is imported in a client module

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.05,
});
export default function RouteLoader() {
  const { isLoading, setIsLoading } = usePageLoading();
  const pathname = usePathname();
  useEffect(() => {
    NProgress.done();
    setIsLoading(false);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[999999]">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black" />
    </div>
  );
}
