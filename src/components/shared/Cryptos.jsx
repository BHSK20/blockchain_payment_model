import React from "react";
import LTC from "../../assets/LTC.png";
import BTC from "../../assets/BTC.png";
import ETH from "../../assets/ETH.png";
import TRX from "../../assets/TRX.png";
import USDC from "../../assets/USDC.png";
import USDT from "../../assets/USDT.png";

export default function Cryptos() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 px-4">
          <div className="card py-3 my-2 mx-3 d-flex flex-row justify-content-evenly align-items-center">
            <img src={LTC} alt="" style={{ width: "33%" }} />
            <div>
              <h1 style={{ color: "rgb(115 115 115)", fontSize: "1.6vw" }}>
                LTC
              </h1>
              <p style={{ fontWeight: 700, fontSize: "2vw" }}>0.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 px-4">
          <div className="card py-3 my-2 mx-3 d-flex flex-row justify-content-evenly align-items-center">
            <img src={BTC} alt="" style={{ width: "33%" }} />
            <div>
              <h1 style={{ color: "rgb(115 115 115)", fontSize: "1.6vw" }}>
                BTC
              </h1>
              <p style={{ fontWeight: 700, fontSize: "2vw" }}>0.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 px-4">
          <div className="card py-3 my-2 mx-3 d-flex flex-row justify-content-evenly align-items-center">
            <img src={ETH} alt="" style={{ width: "20.25%" }} />
            <div>
              <h1 style={{ color: "rgb(115 115 115)", fontSize: "1.6vw" }}>
                ETH
              </h1>
              <p style={{ fontWeight: 700, fontSize: "2vw" }}>0.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 px-4">
          <div className="card py-3 my-2 mx-3 d-flex flex-row justify-content-evenly align-items-center">
            <img src={TRX} alt="" style={{ width: "33%" }} />
            <div>
              <h1 style={{ color: "rgb(115 115 115)", fontSize: "1.6vw" }}>
                TRX
              </h1>
              <p style={{ fontWeight: 700, fontSize: "2vw" }}>0.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 px-4">
          <div className="card py-3 my-2 mx-3 d-flex flex-row justify-content-evenly align-items-center">
            <img src={USDC} alt="" style={{ width: "33%" }} />
            <div>
              <h1 style={{ color: "rgb(115 115 115)", fontSize: "1.6vw" }}>
                USDC
              </h1>
              <p style={{ fontWeight: 700, fontSize: "2vw" }}>0.00</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 px-4">
          <div className="card py-3 my-2 mx-3 d-flex flex-row justify-content-evenly align-items-center">
            <img src={USDT} alt="" style={{ width: "33%" }} />
            <div>
              <h1 style={{ color: "rgb(115 115 115)", fontSize: "1.6vw" }}>
                USDT
              </h1>
              <p style={{ fontWeight: 700, fontSize: "2vw" }}>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
