import React from "react";
import Navbar from "../../components/shared/Navbar";
import Hero from "../../components/shared/Hero";
import Services from "../../components/shared/Services";
import Footer from "../../components/shared/Footer";
import { Box } from "@mui/material";

export default function Page_Home() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </Box>
  );
}
