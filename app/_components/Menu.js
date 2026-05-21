"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { useState, useTransition } from "react";

import Overlay from "./Overlay";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";
import HandleCategoryClick from "./HandleCategoryClick";

function Menu({ categories }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="">
      <Bars3Icon
        // width={20}
        // height={20}
        onClick={() => setMenu((show) => !show)}
        className="w-6 h-6   cursor-pointer ml-4 text-icon"
      />
      {menu && (
        <div
          className={`fixed top-0 left-0 h-full w-full md:w-106 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mt-3 mx-3">
            <button
              onClick={() => setMenu((show) => !show)}
              className="cursor-pointer self-end  "
            >
              <XMarkIcon className="h-5 w-5 " />
            </button>
          </div>

          <div className="mt-10 pl-7">
            <HandleCategoryClick categories={categories} closeMenu={setMenu} />
            {/* <h3 className="uppercase font-medium track-wide text-lg mb-1 ">
              Bathtubs
            </h3> 

            <p className="pl-9 uppercase tracking-wide text-base font-medium  ">
              Shop all
            </p>
          </div>
          <div className="mt-5">
            <h3 className="uppercase font-medium track-wide text-lg">
              Faucets
            </h3>
            */}
          </div>
        </div>
      )}
      {menu && <Overlay isOpen={menu} />}
    </div>
  );
}

export default Menu;
{
  /* 
  <Link
              href="/bathtubs"
              className=" my-20 mb-3 text-grey-0 cursor-pointer md:relative uppercase font-medium tracking-wider text-lg"
            >
              Bathtubs
            </Link>
            <div className="md:border-b-2 md:border-solid md:border-main md:absolute md:top-0"></div>
            <ul className="pl-18 mt-2">
              <li className="mb-2 text-grey-0 cursor-pointer hover:text-main text-sm ">
                <Link href="/bathtubs">Acrylic</Link>
              </li>
              <li className="mb-2 text-grey-0 cursor-pointer hover:text-main text-sm">
                <Link href="/bathtubs">Clawfoot</Link>
              </li>
              <li className="mb-2 text-grey-0 cursor-pointer hover:text-main text-sm">
                <Link href="/bathtubs">Solid Surface</Link>
              </li>
              <li className="mb-2 text-grey-0 cursor-pointer hover:text-main text-sm ">
                <Link href="/bathtubs">Freestanding</Link>
              </li>
            </ul>
            <Link href="/bathtubs">
              <span className="ml-18 uppercase text-sm track-wider text-grey-2 font-bold">
                Shop All
              </span>
            </Link>
          </div>
          <div className="pt-8 md:pt-3 pl-7">
            <Link
              href="/bathtubs"
              className=" my-20 mb-3 text-grey-0 cursor-pointer md:relative uppercase font-medium tracking-wider text-lg"
            >
              Faucets
            </Link>
          </div> */
}
