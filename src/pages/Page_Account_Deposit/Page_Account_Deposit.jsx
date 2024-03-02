import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import DepositForm from "./Child/DepositForm";

export default function Page_Account_Deposit() {
  return (
    <div
      // Changed: Remove style={{ marginTop: "15px" }}
      className="container px-10 py-3"
    >
      {/* <Cryptos /> */}
      <DepositForm />
    </div>
  );
}
