import { Box, Paper } from "@mui/material";
import React from "react";

export default function Page_Account_Orders() {
  return (
    <div style={{ marginTop: "25px" }}>
      <Paper
        sx={{
          boxShadow: 10,
          borderRadius: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          minHeight: "600px",
        }}
      >
        <Box
          sx={{
            fontSize: "3vw",
            fontWeight: 600,
            color: "black",
            display: "inline-flex",
            justifyContent: "start",
          }}
        >
          Orders
        </Box>
      </Paper>
    </div>
  );
}
