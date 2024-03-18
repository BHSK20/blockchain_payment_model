import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import axios from "axios";

export default function Page_Email_Verification_Id() {
  const { emailid } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // CHANGE TO LINK TO emailid
        const response = await axios.get(
          "https://on-shop-blockchain.onrender.com/register?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoie1wiZW1haWxcIjogXCJnaWFiYW81MTUxNTFAZ21haWwuY29tXCIsIFwibmFtZVwiOiBcInJlY3J1aXRlcjFcIiwgXCJwYXNzd29yZFwiOiBcIiQyYiQxMiRTQzlpODFJNzlnT2hmMW1WZFRFdDEuSklXU2hoMmM1ZWZDMDM3RGxwYm9nV2dkNjNNZWhOV1wifSIsImV4cCI6MTcxMDY2MTgwNH0.QclLlKP5Gx73MgjKwQA34OF8-e5nUl9ib7Mp_Dw7L5w"
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
          // FIX UI HERE
          <div>Success</div>
        ) : (
          // FIX UI HERE
          <div>Error</div>
        )}
      </Box>
      {/* <Footer /> */}
    </>
  );
}
