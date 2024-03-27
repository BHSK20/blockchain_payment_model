import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import axios from "axios";
import VerifiedIcon from "@mui/icons-material/Verified";
import WarningIcon from "@mui/icons-material/Warning";

export default function Page_Email_Verification_Id() {
  const { emailid } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(null);
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
        {verificationStatus && verificationStatus.data.public_key ? (
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
        ) : (
          <Box>
            <Box sx={{ fontSize: "100px" }}>
              <WarningIcon fontSize="inherit" sx={{ color: "#ff0033" }} />
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
              Error
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "25px",
                marginTop: "10px",
                color: "black",
              }}
            >
              Your email address could not be verified.
            </Typography>
          </Box>
        )}
      </Box>
      {/* <Footer /> */}
    </>
  );
}
