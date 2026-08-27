import Navigation from "./Navigation";
import Logo from "./Logo";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
//import { createClient } from "../utils/supabase/client";
import { createClient } from "../utils/supabase/server";
// import { useCart } from "./CartContext";
// import ShoppingCart from "./ShoppingCart";
// import Menu from "./Menu";
import Banner from "./Banner";

import { UserCircleIcon } from "@heroicons/react/24/outline";

// import ShoppingCart from "./ShoppingCart";
import SafeCart from "./SafeCart";

// import { useEffect } from "react";
// import { supabase } from "../_lib/supabase";

export default function Header() {
  return (
    <header className="relative flex w-full justify-center items-center bg-white min-h-[65px] md:min-h-[80px] border-b border-stone-100">
      <Logo />
    </header>
  );
}
