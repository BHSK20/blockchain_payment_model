import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import MerchantAPIForm from "./Child/MerchantAPIForm";

export default function Page_Account_MerchantAPI() {
  return (
    <div
      // Changed: Remove style={{ marginTop: "15px" }}
      className="container px-10 py-3"
    >
      {/* <Cryptos /> */}
      <MerchantAPIForm />
    </div>
  );
}
