import Link from "next/link";
import { usePageLoading } from "./PageLoadingContext";
import NProgress from "nprogress";

function NavLink({ href, children, closeMenu, ...props }) {
  const { setIsLoading } = usePageLoading();
  function handleNavigation(e) {
    // Let browser open new tabs normally
    if (e.metakey || e.ctrlKey) return;
    // close menu immediately
    if (closeMenu) closeMenu();
    // turn on global page loading state
    setIsLoading(true);
    //Start loading bar
    NProgress.start();
  }
  return (
    <Link href={href} onClick={handleNavigation} {...props}>
      {children}
    </Link>
  );
}

export default NavLink;
