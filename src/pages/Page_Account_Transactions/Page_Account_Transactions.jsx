import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import TransactionTable from "./Child/TransactionTable";

export default function Page_Account_Transactions() {
  return (
    <div
      // Changed: Remove style={{ marginTop: "15px" }}
      className="container px-10 py-3"
    >
      {/* <Cryptos /> */}
      <TransactionTable />
    </div>
  );
}
