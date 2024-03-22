import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineCog, HiOutlineLogout, HiOutlineUser } from "react-icons/hi";
import { MdOutlineLockReset } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/apiRequest";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const userInformation = useSelector((state) => state.auth.login.currentUser);
  const [userInformation, setUserInformation] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    // Function to update userInformation from localStorage
    const updateUserInformation = () => {
      setUserInformation(JSON.parse(localStorage.getItem("user")));
    };

    // Listen for changes to localStorage
    window.addEventListener("storage", updateUserInformation);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("storage", updateUserInformation);
    };
  }, []);

  return (
    <div className="bg-white h-16 flex justify-center sm:px-16 sm:justify-between items-center space-x-3">
      <div
        className="account-balance flex justify-center items-center gap-1"
        style={{ color: "#ffbb11" }}
      >
        <RiMoneyDollarCircleFill className="text-4xl" />
        <span className="text-xl" style={{ fontWeight: 500 }}>
          {userInformation.balance}
        </span>
      </div>
      {/* Changed: Replace gap-3 by space-x-3 */}
      <div className="account-details flex justify-center items-center space-x-1 md:space-x-2">
        <div className="avatar">
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <span className="sr-only">Open user menu</span>
                <div
                  className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  <span className="sr-only">John Doe</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/account/profile")}
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-2 py-2 text-gray-700 cursor-pointer focus:bg-gray-200",
                        "flex items-center gap-2"
                        // "justify-center"
                      )}
                    >
                      <span className="text-xl">
                        <HiOutlineUser />
                      </span>
                      <span>Profile</span>
                    </div>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/account/settings")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200",
                      "flex items-center gap-2"
                    )}
                  >
                    <span className="text-xl">
                      <HiOutlineCog />
                    </span>
                    Settings
                  </div>
                )}
              </Menu.Item> */}
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/account/resetpassword")}
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-2 py-2 text-gray-700 cursor-pointer focus:bg-gray-200",
                        "flex items-center gap-2"
                        // "justify-center"
                      )}
                    >
                      <span className="text-xl">
                        <MdOutlineLockReset />
                      </span>
                      <span>Reset Password</span>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => logoutUser(dispatch, navigate)}
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-2 py-2 text-gray-700 cursor-pointer focus:bg-gray-200",
                        "flex items-center gap-2"
                        // "justify-center"
                      )}
                    >
                      <span className="text-xl">
                        <HiOutlineLogout />
                      </span>
                      <span>Logout</span>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="information">
          <p
            style={{
              fontSize: "17px",
              color: "rgb(2 132 199",
              fontWeight: 500,
            }}
          >
            {userInformation.name}
          </p>
          <p style={{ fontSize: "15px" }}>{userInformation.email}</p>
        </div>
      </div>
    </div>
  );
}
