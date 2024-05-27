import React from "react";
import { Link } from "react-router-dom";
import HCMUT_logo from "../../assets/HCMUT_logo.png";

export default function Footer() {
  return (
    // <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
    //   <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
    //   </div>
    // </div>
    <div className="footer mt-24">
      <footer className="bg-body-tertiary text-center text-lg-start">
        {/* Content */}
        <div
          className="text-center text-md-start py-3 px-16"
          style={{ backgroundColor: "rgb(228 228 231)" }}
        >
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-8">
              {/* Introduction */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "5px",
                }}
                className="justify-content-md-start justify-content-center"
              >
                <img
                  src={HCMUT_logo}
                  alt="HCMUT"
                  style={{ maxWidth: "25px" }}
                />
                <h6 className="text-uppercase fw-bold">VNU-HCMUT</h6>
              </div>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                BKpay is an innovative payment system based on Blockchain
                technology, developed by a group of students from Ho Chi Minh
                City University of Technology (HCMUT), which is a member of
                Vietnam National University-Ho Chi Minh City (VNU-HCMC).
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-8">
              Links
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>Mobile Devices</p>
              <p>Desktop Computers</p>
              <p>Audio Devices</p>
            </div> */}
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-8">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p className="mb-2">
                {/* <a
                  href="/"
                  className="text-dark text-decoration-none"
                  title="Home"
                >
                  Home
                </a> */}
                <Link
                  to="/"
                  // title="Home"
                >
                  Home
                </Link>
              </p>
              <p>
                {/* <a
                  href="/about"
                  className="text-dark text-decoration-none"
                  title="About"
                >
                  About
                </a> */}
                <Link
                  to="/"
                  // title="About"
                >
                  About
                </Link>
              </p>
              {/* <p>
                        <a href="#!" className="text-dark">Your Account</a>
                    </p>
                    <p>
                        <a href="#!" className="text-dark">Become an Affiliate</a>
                    </p>
                    <p>
                        <a href="#!" className="text-dark">Shipping Rates</a>
                    </p>
                    <p>
                        <a href="#!" className="text-dark">Help</a>
                    </p> */}
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-3 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p className="mb-2">
                <i class="fas fa-map-marker-alt mr-1"></i> 268 Ly Thuong Kiet
                Street Ward 14, District 10 Ho Chi Minh City, Vietnam
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope mr-1"></i> bkpay@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-1"></i> +01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Content */}

        {/* Copyright */}
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:{" "}
          <a
            className="text-dark"
            href="https://hcmut.edu.vn/"
            target="_blank"
            rel="noreferrer"
          >
            hcmut.edu.vn
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}
