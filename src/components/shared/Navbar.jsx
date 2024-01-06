import React, { useState } from "react";
// import { FcBullish } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-2">
          {/* <FcBullish className="text-3xl sm:text-4xl" /> */}
          <FcMindMap className="text-3xl sm:text-4xl" />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BKpay</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            {/* <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Log In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <HiX className="w-5" /> : <HiOutlineMenu className="w-5" />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-sky-600 px-8 py-3 mb-4">
            Log In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
