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
import { useCart } from "./CartContext";
// import ShoppingCart from "./ShoppingCart";
import Menu from "./Menu";
import Banner from "./Banner";
import { getCategories } from "../_lib/data-service";
import { UserCircleIcon } from "@heroicons/react/24/outline";

// import ShoppingCart from "./ShoppingCart";
import SafeCart from "./SafeCart";

// import { useEffect } from "react";
// import { supabase } from "../_lib/supabase";

export default async function Header() {
  // const session = await auth();
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const categories = await getCategories();
  console.log(data);

  // const { full_name: fullName } = data.user.user_metadata;
  // console.log(fullName);
  // console.log(data);
  //  bg-white border-b border-gray-100;

  // sticky top-0 z-50
  return (
    <header className="flex w-full justify-between items-center shadow-sm bg-white min-h-[90px] md:min-h-[110px]">
      <Menu categories={categories} />

      <Logo />

      {data?.user ? (
        <div className=" flex gap-5">
          <Link href="/account" className="flex gap-4 cursor-pointer ">
            <UserIcon width={22} height={22} />
          </Link>
          {/* <SignOutButton /> */}

          <SafeCart />
        </div>
      ) : (
        <div className="flex gap-2 md:gap-2 md:mr-4">
          <Link href="/login" className=" cursor-pointer flex gap-1 ">
            <span className="text-grey-0 text-xs md:text-sm hidden md:block md:self-end">
              Sign In{" "}
            </span>
            <UserCircleIcon className=" w-6 h-6  text-icon" />
          </Link>

          <SafeCart />
        </div>
      )}

      {/* <div className="aboslute rounded-full bg-red-500" />  */}
      {/* <Navigation /> */}
      {/* <div className="flex gap-2 relative ">
          <MagnifyingGlassIcon className="h-5 w-5 text-black" />
          {data?.user ? (
            <div className="group">
              <Link href="/account" className="flex gap-4 cursor-pointer ">
                {/* <Image
                  className="h-9 w-9 rounded-full border-accent-300 "
                  src={data.user}
                  alt={data.user}
                  referrerPolicy="no-referrer"
                  width="8"
                  height="8"
                /> 
                <p>Account</p>
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <Link href="/login" className=" cursor-pointer">
              <span className="text-grey-0">Login</span>
            </Link>
          )}
          {/* <UserIcon className="h-5 w-5" /> 
          <ShoppingCartIcon className="h-5 w-5 hover:text-my-orange2 cursor-pointer transition-colors" />
        </div> 
      </div> */}
    </header>
  );
}
