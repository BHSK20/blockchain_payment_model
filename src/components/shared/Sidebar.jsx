import React from "react";
// import { FcBullish } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-1 py-3 justify-center">
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <FcBullish fontSize={24} /> */}
          <FcMindMap fontSize={30} />
          <span className="text-neutral-100 text-3xl font-bold">BKpay</span>
        </Link>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

// item = { props }
function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white bg-sky-600" : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
