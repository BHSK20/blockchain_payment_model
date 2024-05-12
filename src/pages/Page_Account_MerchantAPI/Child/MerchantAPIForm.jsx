import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { registerMerchant } from "../../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function MerchantAPIForm() {
  const dispatch = useDispatch();

  const [merchantName, setMerchantName] = useState(null);
  const [country, setCountry] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [city, setCity] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [phone, setPhone] = useState(null);

  const merchantRegisterStatus = useSelector(
    (state) => state.merchant?.isFetching
  );
  const handleMerchantRegister = (e) => {
    e.preventDefault();
    // console.log("merchantName", merchantName);
    // console.log("country", country);
    // console.log("zipCode", zipCode);
    // console.log("city", city);
    // console.log("address1", address1);
    // console.log("address2", address2);
    // console.log("phone", phone);
    const newMerchant = {
      merchant_name: merchantName,
      country: country,
      zipcode: zipCode,
      city: city,
      phone: phone,
      address1: address1,
      address2: address2,
    };
    registerMerchant(newMerchant, dispatch);
  };

  return (
    <Box sx={{ marginTop: "10px", minHeight: 600 }}>
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
        <form onSubmit={handleMerchantRegister}>
          <Box
            sx={{
              // fontSize: "3vw",
              fontSize: "45px",
              fontWeight: 600,
              color: "black",
              display: "inline-flex",
              justifyContent: "start",
            }}
          >
            MerchantAPI
          </Box>
          {/* <Divider sx={{ borderColor: "gray", borderBottomWidth: 1 }} /> */}
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
                onChange={(e) => setMerchantName(e.target.value)}
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
                onChange={(e) => setCountry(e.target.value)}
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
                onChange={(e) => setZipCode(e.target.value)}
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
                onChange={(e) => setCity(e.target.value)}
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
                onChange={(e) => setAddress1(e.target.value)}
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
                onChange={(e) => setAddress2(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <h4 className="fs-5" style={{ marginBottom: 8, fontWeight: 700 }}>
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
        </form>
        {merchantRegisterStatus && (
          <div
            style={{
              position: "fixed",
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
        )}
      </Paper>
    </Box>
  );
}
