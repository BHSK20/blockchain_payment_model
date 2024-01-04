import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiQuestionMarkCircle,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "transactions",
    label: "Transactions",
    path: "/account/transactions",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "transfer",
    label: "Transfer",
    path: "/account/transfer",
    icon: <HiOutlineCube />,
  },
  {
    key: "deposit",
    label: "Deposit",
    path: "/account/deposit",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "withdraw",
    label: "Withdraw",
    path: "/account/withdraw",
    icon: <HiOutlineUsers />,
  },
  {
    key: "exchange",
    label: "Exchange",
    path: "/account/exchange",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "merchantapi",
    label: "Merchant API",
    path: "/account/merchantapi",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/account/orders",
    icon: <HiQuestionMarkCircle />,
  },
];

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
//   {
//     key: "settings",
//     label: "Settings",
//     path: "/settings",
//     icon: <HiOutlineCog />,
//   },
//   {
//     key: "support",
//     label: "Help & Support",
//     path: "/support",
//     icon: <HiOutlineQuestionMarkCircle />,
//   },
// ];
