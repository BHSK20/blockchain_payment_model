import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useDispatch } from "react-redux";

export default function Layout() {
  // CODE FOR REFERENCE
  // const dispatch = useDispatch;
  // useEffect(() => {
  //   const localStorageUser = localStorage.getItem("user");
  //   const user = JSON.parse(localStorageUser);
  //   dispatch({ type: "user/setUser", payload: user });
  //   return () => {
  //     dispatch({ type: "profile/setProfile", payload: null });
  //   };
  // }, []);
  return (
    // REMOVE h-screen w-screen overflow-hidden
    <div className="flex flex-row bg-neutral-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4" style={{ backgroundColor: "#dddddd" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
