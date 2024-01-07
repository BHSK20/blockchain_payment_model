import React from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

export default function Page_Login() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "575px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Page_Login</h1>
      </div>
      <Footer />
    </>
  );
}
