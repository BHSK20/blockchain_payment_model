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
  HiSwitchHorizontal,
  HiOutlineIdentification,
} from "react-icons/hi";

import {
  HiArrowPath,
  HiArrowsRightLeft,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineBuildingLibrary,
} from "react-icons/hi2";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "transactions",
    label: "Transactions",
    path: "/account/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "transfer",
    label: "Transfer",
    path: "/account/transfer",
    icon: <HiArrowsRightLeft />,
  },
  {
    key: "deposit",
    label: "Deposit",
    path: "/account/deposit",
    icon: <HiOutlineBuildingLibrary />,
  },
  // {
  //   key: "withdraw",
  //   label: "Withdraw",
  //   path: "/account/withdraw",
  //   icon: <HiOutlineBanknotes />,
  // },
  // {
  //   key: "exchange",
  //   label: "Exchange",
  //   path: "/account/exchange",
  //   icon: <HiArrowPath />,
  // },
  {
    key: "merchantapi",
    label: "Merchant API",
    path: "/account/merchant-api",
    icon: <HiOutlineBriefcase />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/account/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "kyccheck",
    label: "KYC Check",
    path: "/account/kyc-check",
    icon: <HiOutlineIdentification />,
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
