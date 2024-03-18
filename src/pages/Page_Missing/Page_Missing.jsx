import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

export default function Page_Missing() {
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
        <Typography
          variant="h1"
          sx={{
            fontSize: "40px",
            marginTop: "150px",
            color: "black",
          }}
        >
          Opps! Page Not Found
        </Typography>

        <Box
          sx={{
            margin: "30px auto",
            fontSize: "125px",
            lineHeight: "125px",
            borderRadius: "30px",
            fontWeight: 600,
          }}
        >
          404
        </Box>

        <Typography
          variant="h5"
          sx={{
            marginTop: "10px",
            fontSize: "25px",
            textAlign: "center",
            width: "35%",
          }}
        >
          We are sorry, but the page you requested was not found
        </Typography>
      </Box>
      {/* <Footer /> */}
    </>
  );
}
