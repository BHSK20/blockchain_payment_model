import React from "react";
import bgImg from "../../assets/blockchain-veed-remove-background.png";

export default function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        {/* items-center md:items-start */}
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-20 items-center">
          <p className="text-lg lg:text-xl xl:text-2xl">
            Secure and Easy to Use
          </p>
          <h1 className="py-3 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Blockchain Payment System
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Crypto Transfer API, Crypto Payment Gateway
          </p>
          <button className="py-3 px-6 w-full md:w-[60%] my-4">
            Get Started
          </button>
        </div>
        <div>
          <img
            className="translate-x-24 w-[60%] md:w-full md:translate-x-0"
            src={bgImg}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
