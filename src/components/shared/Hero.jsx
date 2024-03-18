import React from "react";
import bgImg from "../../assets/blockchain-veed-remove-background.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Hero() {
  const navigate = useNavigate();

  // const userInformation = useSelector((state) => state.auth.login.currentUser);
  const userInformation = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        {/* items-center md:items-start */}
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-20 items-center">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-left">
            Secure and Easy to Use
          </p>
          <h1 className="py-3 text-[35px] md:text-5xl lg:text-6xl xl:text-7xl font-bold md:text-left">
            Blockchain Payment System
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-left">
            Crypto Transfer API, Crypto Payment Gateway
          </p>
          <button
            className="py-3 px-6 w-full md:w-[60%] my-4"
            onClick={() => {
              if (userInformation) {
                navigate("/account/transactions");
              } else {
                navigate("/login");
              }
            }}
          >
            Get Started
          </button>
        </div>
        <div>
          <img
            className="translate-x-24 -translate-y-10 w-[60%] md:w-full md:translate-x-0 md:translate-y-6"
            src={bgImg}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
