import {
  Box,
  Button,
  CircularProgress,
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
import QRCode from "react-qr-code";
import { depositCurrency } from "../../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";

export default function DepositForm() {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [qrCodeData, setQrCodeData] = useState(""); // State for QR code data

  const calculateDepositDetails = () => {
    setCalculatedAmount(amount);
    setCalculatedPrice(amount);
  };

  const generateQRCodeData = () => {
    const randomData = Math.random().toString(36).substring(7); // Generate some random data for the QR code
    setQrCodeData(randomData);
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    console.log("amount", amount);
    console.log("currency", currency);
    if (amount && currency) {
      calculateDepositDetails();
      generateQRCodeData(); // Call the function to generate QR code data
    }
  };

  const depositCurrencyStatus = useSelector(
    (state) => state.deposit?.isFetching
  );
  const handleAcceptDeposit = async (e) => {
    e.preventDefault();
    console.log("calculatedAmount", calculatedAmount);
    console.log("calculatedPrice", calculatedPrice);
    const data = {
      amount: calculatedAmount,
      currency: currency,
    };
    try {
      await depositCurrency(data, dispatch);
      setQrCodeData("");
      setCalculatedPrice(0);
      setCalculatedAmount(0);
      setCurrency(null);
      setAmount(null);
    } catch (error) {
      console.error(error);
    }
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
                value={amount || ""}
                InputProps={{
                  inputProps: { min: 0 },
                }}
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
                  label="Currency"
                  onChange={(newValue) => {
                    setCurrency(newValue.target.value);
                  }}
                  value={currency || ""}
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
                    // className="text-lg text-indigo-600"
                    className="text-lg"
                    style={{ fontWeight: 500 }}
                  >
                    {calculatedPrice}
                  </span>
                  <span
                    // className="text-lg text-indigo-600"
                    className="text-lg"
                    style={{ fontWeight: 500 }}
                  >
                    VND
                  </span>
                </div>
              </Box>
              <Divider sx={{ borderColor: "black", borderBottomWidth: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                {/* Render QR Code here */}
                {qrCodeData && <QRCode value={qrCodeData} />}
              </Box>
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
        {depositCurrencyStatus && (
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
