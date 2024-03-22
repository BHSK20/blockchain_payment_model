import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function DepositForm() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(null);
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculateDepositDetails = () => {
    setCalculatedAmount(amount);
    setCalculatedPrice(amount);
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    console.log("amount", amount);
    console.log("currency", currency);
    if (amount && currency) {
      calculateDepositDetails();
    }
  };

  const handleAcceptDeposit = (e) => {
    e.preventDefault();
    console.log("calculatedAmount", calculatedAmount);
    console.log("calculatedPrice", calculatedPrice);
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
        <form onSubmit={handleAcceptDeposit}>
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
            Deposit
          </Box>
          {/* <Divider sx={{ borderColor: "gray", borderBottomWidth: 1 }} /> */}
          <Box className="row">
            <Box className="col-12 col-md-6">
              <h4 style={{ marginTop: 35, marginBottom: 10, fontWeight: 600 }}>
                Amount
              </h4>
              <TextField
                label="Enter the amount"
                variant="outlined"
                type="number"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
                onChange={(e) => setAmount(e.target.value)}
              ></TextField>
            </Box>
            <Box className="col-12 col-md-3">
              <h4 style={{ marginTop: 35, marginBottom: 10, fontWeight: 600 }}>
                Currency
              </h4>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  label="Currency"
                  onChange={(newValue) => {
                    setCurrency(newValue.target.value);
                  }}
                >
                  <MenuItem value={"ltc"}>LTC</MenuItem>
                  <MenuItem value={"btc"}>BTC</MenuItem>
                  <MenuItem value={"eth"}>ETH</MenuItem>
                  <MenuItem value={"trx"}>TRX</MenuItem>
                  <MenuItem value={"usdc"}>USDC</MenuItem>
                  <MenuItem value={"usdt"}>USDT</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              className="col-12 col-md-3"
              sx={{
                display: "flex",
                // justifyContent: "end",
                alignItems: "end",
              }}
            >
              <Button
                className="px-8"
                type="button" // Change type from "submit" to "button" to prevent form submission
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "4px",
                  marginTop: 5,
                  textTransform: "none",
                  backgroundColor: "#0284c7",
                  fontSize: "16px",
                  width: "100%",
                }}
                onClick={handleDeposit} // Call handleDeposit on button click
              >
                Deposit
              </Button>
            </Box>
            <Box className="col-12 col-md-6">
              <h4
                className="text-2xl"
                style={{
                  marginTop: 100,
                  color: "rgb(2 132 199",
                  fontWeight: 600,
                }}
              >
                Deposit Details
              </h4>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <div className="flex justify-center items-center">
                  <span className="text-lg">Amount</span>
                </div>
                <div
                  className="flex justify-center items-center gap-0.5"
                  style={{ color: "#ffbb11" }}
                >
                  <span className="text-lg" style={{ fontWeight: 500 }}>
                    {calculatedAmount}
                  </span>
                  <RiMoneyDollarCircleFill className="text-4xl" />
                </div>
              </Box>
              <Divider sx={{ borderColor: "black", borderBottomWidth: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <div className="flex justify-center items-center">
                  <span className="text-lg">Price</span>
                </div>
                <div className="flex justify-center items-center gap-0.5">
                  <span
                    className="text-lg text-indigo-600"
                    style={{ fontWeight: 500 }}
                  >
                    {calculatedPrice}
                  </span>
                  <span
                    className="text-lg text-indigo-600"
                    style={{ fontWeight: 500 }}
                  >
                    VND
                  </span>
                </div>
              </Box>
              <Divider sx={{ borderColor: "black", borderBottomWidth: 2 }} />
              <Button
                className="px-8"
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "4px",
                  marginTop: 5,
                  textTransform: "none",
                  backgroundColor: "#0284c7",
                  fontSize: "16px",
                  width: "100%",
                }}
              >
                Accept
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
