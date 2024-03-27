import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import axios from "axios";
import VerifiedIcon from "@mui/icons-material/Verified";
import WarningIcon from "@mui/icons-material/Warning";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function Page_Email_Verification_Id() {
  const { emailid } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(null);
  const verifyStatus = useSelector((state) => state.verify?.isFetching);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://on-shop-blockchain.onrender.com/register?token=${emailid}`
        );
        console.log("response", response);
        setVerificationStatus(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [emailid]);

  // FIX THE CODE TO SHOW LOADING EFFECT BEFORE DISPLAYING SUCCESS/DISPLAY MESSAGE (1)
  const renderMessage = () => {
    if (verifyStatus) {
      return (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </div>
      );
    } else if (verificationStatus && verificationStatus.data.public_key) {
      return (
        <Box>
          <Box sx={{ fontSize: "100px" }}>
            <VerifiedIcon fontSize="inherit" sx={{ color: "#5cb85c" }} />
          </Box>
          <Box
            sx={{
              // fontSize: "3vw",
              fontSize: "75px",
              fontWeight: 600,
              color: "black",
              // display: "inline-flex",
              // justifyContent: "start",
            }}
          >
            Success
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              marginTop: "10px",
              color: "black",
            }}
          >
            Your email address was successfully verified.
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box>
          <Box sx={{ fontSize: "100px" }}>
            {/* FIX THE CODE TO SHOW LOADING EFFECT BEFORE DISPLAYING SUCCESS/DISPLAY MESSAGE (2) */}
            {/* <WarningIcon fontSize="inherit" sx={{ color: "#ff0033" }} /> */}
            <WarningIcon fontSize="inherit" sx={{ color: "#ffd700" }} />
          </Box>
          <Box
            sx={{
              // fontSize: "3vw",
              fontSize: "75px",
              fontWeight: 600,
              color: "black",
              // display: "inline-flex",
              // justifyContent: "start",
            }}
          >
            {/* FIX THE CODE TO SHOW LOADING EFFECT BEFORE DISPLAYING SUCCESS/DISPLAY MESSAGE (3) */}
            {/* Error */}
            Loading
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              marginTop: "10px",
              color: "black",
            }}
          >
            {/* FIX THE CODE TO SHOW LOADING EFFECT BEFORE DISPLAYING SUCCESS/DISPLAY MESSAGE (4) */}
            {/* Your email address could not be verified. */}
            Your email verification are processing.
          </Typography>
        </Box>
      );
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          height: "78vh",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderMessage()}
      </Box>
      {/* <Footer /> */}
    </>
  );
}
