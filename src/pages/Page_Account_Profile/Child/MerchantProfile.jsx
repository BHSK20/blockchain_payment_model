import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MerchantProfile() {
  const [merchantName, setMerchantName] = useState(null);
  const [country, setCountry] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [city, setCity] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [phone, setPhone] = useState(null);

  return (
    <Box>
      <Box>
        <h4
          style={{
            marginBottom: 8,
            fontWeight: 600,
            fontSize: 20,
            color: "rgb(2 132 199)",
          }}
        >
          API Key:
        </h4>
        <h4
          style={{
            marginTop: 30,
            marginBottom: 8,
            fontWeight: 600,
            fontSize: 20,
            color: "rgb(2 132 199)",
          }}
        >
          Partner Code:
        </h4>
      </Box>
      <Box className="row">
        <Box className="col-12 col-md-6">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
            Merchant Name
          </h4>
          <TextField
            label="Enter the company name"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            required
            autoComplete="new-text"
            // onChange={(e) => setMerchantName(e.target.value)}
          ></TextField>
        </Box>
        <Box className="col-12 col-md-6">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
            Country
          </h4>
          <TextField
            label="Enter the country"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            required
            autoComplete="new-text"
            // onChange={(e) => setCountry(e.target.value)}
          ></TextField>
        </Box>
        <Box className="col-12 col-md-6">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
            ZIP Code/Postal Code
          </h4>
          <TextField
            label="Enter the code"
            variant="outlined"
            type="number"
            size="small"
            fullWidth
            required
            autoComplete="new-text"
            // onChange={(e) => setZipCode(e.target.value)}
          ></TextField>
        </Box>
        <Box className="col-12 col-md-6">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
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
            // onChange={(e) => setCity(e.target.value)}
          ></TextField>
        </Box>
        <Box className="col-12">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
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
            // onChange={(e) => setAddress1(e.target.value)}
          ></TextField>
        </Box>
        <Box className="col-12 col-md-6">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
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
            // onChange={(e) => setAddress2(e.target.value)}
          ></TextField>
        </Box>
        <Box className="col-12 col-md-6">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
            Phone
          </h4>
          <TextField
            label="Enter the phone"
            variant="outlined"
            type="number"
            size="small"
            fullWidth
            required
            autoComplete="new-text"
            // onChange={(e) => setPhone(e.target.value)}
          ></TextField>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: 3 }}>
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
          Update
        </Button>
      </Box>
    </Box>
  );
}
