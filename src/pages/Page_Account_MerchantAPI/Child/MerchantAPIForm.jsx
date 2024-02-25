import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import React from "react";

export default function MerchantAPIForm() {
  return (
    <div className="container px-10 py-5">
      <Box
        sx={{
          fontSize: "2.6vw",
          fontWeight: 600,
          color: "black",
          display: "inline-flex",
          justifyContent: "start",
        }}
      >
        MerchantAPI
      </Box>
      <Divider sx={{ borderColor: "lightgray" }} />
      <Box sx={{ marginTop: "10px" }}>
        <Paper
          sx={{
            boxShadow: 10,
            borderRadius: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
          }}
        >
          <Box className="row">
            <Box className="col-6">
              <h4 style={{ marginBottom: 5, fontWeight: 600 }}>Company Name</h4>
              <TextField
                label="Enter the company name"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
            <Box className="col-6">
              <h4 style={{ marginBottom: 5, fontWeight: 600 }}>Country</h4>
              <TextField
                label="Enter the country"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
            <Box className="col-6">
              <h4 style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}>
                ZIP Code/Postal Code
              </h4>
              <TextField
                label="Enter the code"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
            <Box className="col-6">
              <h4 style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}>
                City
              </h4>
              <TextField
                label="Enter the city"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
            <Box className="col-12">
              <h4 style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}>
                Address Line 1
              </h4>
              <TextField
                label="Enter the address line 1"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
            <Box className="col-6">
              <h4 style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}>
                Address Line 2
              </h4>
              <TextField
                label="Enter the address line 2"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
            <Box className="col-6">
              <h4 style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}>
                Phone
              </h4>
              <TextField
                label="Enter the phone"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
              ></TextField>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <h4 className="fs-5" style={{ marginBottom: 5, fontWeight: 700 }}>
              I hereby confirm that all the provided information is CORRECT and
              TRUE.
            </h4>
            <Button
              className="px-8"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "4px",
                marginTop: 1,
                textTransform: "none",
                backgroundColor: "#0284c7",
                fontSize: "16px",
              }}
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
