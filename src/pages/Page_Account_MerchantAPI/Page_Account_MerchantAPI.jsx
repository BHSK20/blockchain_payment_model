import React from "react";
import Cryptos from "../../components/shared/Cryptos";
import MerchantAPIForm from "./Child/MerchantAPIForm";

export default function Page_Account_MerchantAPI() {
  return (
    <div style={{ marginTop: "15px" }}>
      <Cryptos />
      <MerchantAPIForm />
    </div>
  );
}
