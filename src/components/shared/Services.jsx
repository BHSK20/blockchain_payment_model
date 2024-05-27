import React from "react";
import {
  HiComputerDesktop,
  HiMiniDevicePhoneMobile,
  HiCodeBracket,
  HiMiniWallet,
  HiBuildingOffice,
  HiShieldCheck,
} from "react-icons/hi2";

export default function Services() {
  return (
    <div
      name="services"
      className="md:px-10 px-4 py-10 max-w-sceen-2xl mx-auto"
    >
      {/* services introduction */}
      <div className="mt-10 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-3">
          Manage your payments in our system
        </h2>
        <p>Why choose BKpay Wallet?</p>
      </div>

      {/* services cards */}
      <div className="mt-14 mb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
          <div className="mb-4 mx-auto">
            <HiComputerDesktop fontSize={100} className="text-indigo-600" />
          </div>
          <h4 className="text-2xl font-bold mb-2 px-2">
            Web Wallet for All Devices
          </h4>
          <p className="text-sm">
            BKpay Wallet is compatible with computers, laptops, and handheld
            devices running any operating system and equipped with an
            HTML/Javascript compatible web browser.
          </p>
        </div>
        <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
          <div className="mb-4 mx-auto">
            <HiMiniDevicePhoneMobile
              fontSize={100}
              className="text-indigo-600"
            />
          </div>
          <h4 className="text-2xl font-bold mb-2 px-2">
            Mobile and Tablet Convenience
          </h4>
          <p className="text-sm">
            Our mobile app is renowned for its security and user-friendliness.
            Designed to meet global audience needs, it is available on both
            Android and iOS devices and offers seamless functionality on
            tablets.
          </p>
        </div>
        <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
          <div className="mb-4 mx-auto">
            <HiCodeBracket fontSize={100} className="text-indigo-600" />
          </div>
          <h4 className="text-2xl font-bold mb-2 px-2">
            Wallet as a Service API
          </h4>
          <p className="text-sm">
            With BKpay Wallet API, you gain access to an enterprise-grade
            transactional wallet service, send and receive supported
            cryptocurrencies across multiple blockchains.
          </p>
        </div>
        <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
          <div className="mb-4 mx-auto">
            <HiMiniWallet fontSize={100} className="text-indigo-600" />
          </div>
          <h4 className="text-2xl font-bold mb-2 px-2">
            Multi-Currency Support
          </h4>
          <p className="text-sm">
            BKpay is your secure and user-friendly wallet for a range of
            cryptocurrencies, including Bitcoin (BTC), Litecoin (LTC), Ethereum
            (ETH), Tether (USDT) TRC20/ERC20, USD Coin (USDC) TRC20/ERC20, and
            Tron (TRX).
          </p>
        </div>
        <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
          <div className="mb-4 mx-auto">
            <HiBuildingOffice fontSize={100} className="text-indigo-600" />
          </div>
          <h4 className="text-2xl font-bold mb-2 px-2">
            Transparent Business Model
          </h4>
          <p className="text-sm">
            At BKpay, we pride ourselves on our simple and transparent business
            model. All service fees are readily available on our website,
            demonstrating our commitment to providing top-quality wallet
            services.
          </p>
        </div>
        <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
          <div className="mb-4 mx-auto">
            <HiShieldCheck fontSize={100} className="text-indigo-600" />
          </div>
          <h4 className="text-2xl font-bold mb-2 px-2">
            Best-in-Class Security
          </h4>
          <p className="text-sm">
            BKpay Wallet boasts a modular and multi-layer architecture, rigorous
            encryption of all data, and high platform availability. These
            features collectively make it one of the most secure crypto wallets
            available.
          </p>
        </div>
      </div>
    </div>
  );
}
