import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import TransactionTable from "./Child/TransactionTable";

export default function Page_Account_Transactions() {
  return (
    <div
    // Changed: Remove style={{ marginTop: "15px" }}
    >
      {/* <Cryptos /> */}
      <TransactionTable />
    </div>
  );
}
