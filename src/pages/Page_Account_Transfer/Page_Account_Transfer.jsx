import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import TransferForm from "./Child/TransferForm";

export default function Page_Account_Transfer() {
  return (
    <div
      // Changed: Remove style={{ marginTop: "15px" }}
      className="container px-10 py-3"
    >
      {/* <Cryptos /> */}
      <TransferForm />
    </div>
  );
}
