import React, { useState } from "react";
// import { FcBullish } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/apiRequest";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  // const userInformation = useSelector((state) => state.auth.login.currentUser);
  const userInformation = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-1 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-2 xl:translate-x-36 translate-x-0">
          {/* <FcBullish className="text-3xl sm:text-4xl" /> */}
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FcMindMap className="text-3xl sm:text-4xl" />
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BKpay</h1>
          </Link>
          <ul className="hidden md:flex">
            <li>
              <Link
                to="/"
                smooth="true"
                duration={500}
                // title="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                smooth="true"
                offset={-200}
                duration={500}
                // title="About"
              >
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
        <div className="hidden md:flex pr-4 xl:-translate-x-36 translate-x-0">
          {userInformation ? (
            <>
              <div
                className="mr-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Hi, {userInformation.email}
              </div>
              <button
                className="px-8 py-3"
                onClick={() => logoutUser(dispatch, navigate)}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="border-none bg-transparent text-black mr-4"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button className="px-8 py-3" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <HiX className="w-5" /> : <HiOutlineMenu className="w-5" />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="/"
            // title="Home"
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="/about"
            // title="About"
          >
            About
          </Link>
        </li>
        <div className="flex flex-col my-4">
          {userInformation ? (
            <>
              <div
                className="mb-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Hi, {userInformation.email}
              </div>
              <button
                className="px-8 py-3"
                onClick={() => logoutUser(dispatch, navigate)}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-transparent text-sky-600 px-8 py-3 mb-4"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button className="px-8 py-3" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}
