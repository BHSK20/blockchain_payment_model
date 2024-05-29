import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MerchantProfile({ merchantData }) {
  const [merchantName, setMerchantName] = useState(null);
  const [country, setCountry] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [city, setCity] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [phone, setPhone] = useState(null);

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   const updatedMerchant = {
  //     merchant_name: merchantName,
  //     country: country,
  //     zipcode: zipCode,
  //     city: city,
  //     phone: phone,
  //     address1: address1,
  //     address2: address2,
  //   };
  //   console.log("updatedMerchant", updatedMerchant);
  // };

  // useEffect(() => {
  //   setMerchantName(merchantData?.merchant_name);
  //   setCountry(merchantData?.country);
  //   setZipCode(merchantData?.zipcode);
  //   setCity(merchantData?.city);
  //   setAddress1(merchantData?.address1);
  //   setAddress2(merchantData?.address2);
  //   setPhone(merchantData?.phone);
  // }, [merchantData]);

  console.log("ABC", merchantData)

  return (
    <Box>
      <Box>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <th className="col-4 text-success text-xl">API Key</th>
                <td className="col-8 text-lg">{merchantData?.api_key}</td>
              </tr>
              <tr>
                <th className="col-4 text-success text-xl">Partner Code</th>
                <td className="col-8 text-lg">{merchantData?.partner_code}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <h4
          style={{
            marginBottom: 8,
            fontWeight: 600,
            fontSize: 20,
            color: "rgb(2 132 199)",
          }}
        >
          API Key: {merchantData.api_key}
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
          Partner Code: {merchantData.partner_code}
        </h4> */}
      </Box>
      {/* <form onSubmit={handleUpdate}> */}
        <Box className="row">
          <Box className="col-12 col-md-6">
            <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
              Merchant Name
            </h4>
            <TextField
              label="Enter the merchant name"
              variant="outlined"
              type="text"
              size="small"
              fullWidth
              required
              autoComplete="new-text"
              onChange={(e) => setMerchantName(e.target.value)}
              // value={merchantName}
              value={merchantData?.merchant_name}
              InputLabelProps={{ shrink: true }}
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
              // value={country}
              value={merchantData?.country}
              InputLabelProps={{ shrink: true }}
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
              // value={zipCode}
              value={merchantData?.zipcode}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputProps: { min: 0 },
              }}
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
              // value={city}
              value={merchantData?.city}
              InputLabelProps={{ shrink: true }}
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
              // value={address1}
              value={merchantData?.address1}
              InputLabelProps={{ shrink: true }}
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
              // value={address2}
              value={merchantData?.address2}
              InputLabelProps={{ shrink: true }}
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
              // value={phone}
              value={merchantData?.phone}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputProps: { min: 0 },
              }}
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
      {/* </form> */}
    </Box>
  );
}
