import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
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
