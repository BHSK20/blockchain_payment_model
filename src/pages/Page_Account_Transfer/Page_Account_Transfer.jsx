import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import TransferForm from "./Child/TransferForm";

export default function Page_Account_Transfer() {
  return (
    <div style={{ marginTop: "15px" }}>
      <Cryptos />
      <TransferForm />
    </div>
  );
}
