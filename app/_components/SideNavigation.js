"use client";
import {
  CubeIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAddressBook, FaBox } from "react-icons/fa";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "My Orders",
    href: "/account/orders",
    icon: <CubeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Wishlist",
    href: "/account/wishlist",
    icon: <HeartIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "User profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Your Addresses",
    href: "/account/addresses",
    icon: <FaAddressBook className="h-5 w-5 text-primary-600" />,
  },
];
function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold  ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        {/* <li className="mt-auto">
          <SignOutButton />
        </li> */}
      </ul>
    </nav>
  );
}

export default SideNavigation;
