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
import Swal from "sweetalert2";
import { transferCurrency } from "../../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function TransferForm() {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [email, setEmail] = useState(null);
  const [note, setNote] = useState(null);

  const transferCurrencyStatus = useSelector(
    (state) => state.transfer?.isFetching
  );
  const handleTransfer = (e) => {
    e.preventDefault();
    if (emailError) {
      Swal.fire({
        title: "The form cannot be submitted",
        text: "Please use a valid email address.",
        icon: "error",
        confirmButtonColor: "#5a67d8",
      });
      return;
    }
    console.log("amount", amount);
    console.log("currency", currency);
    console.log("email", email);
    console.log("note", note);
    const data = {
      amount: amount,
      currency: currency,
      email: email,
    };
    transferCurrency(data, dispatch);
  };

  // ----------------------------------------------------------------------
  // Email Validation
  const [emailError, setEmailError] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(event.target.value) || event.target.value === "") {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  // ----------------------------------------------------------------------

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
        <form onSubmit={handleTransfer}>
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
            Transfer
          </Box>
          {/* <Divider sx={{ borderColor: "gray", borderBottomWidth: 1 }} /> */}
          <Box className="row">
            <Box className="col-12 col-sm-6 col-md-8">
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
                InputProps={{
                  inputProps: { min: 0 },
                }}
              ></TextField>
            </Box>
            <Box className="col-12 col-sm-6 col-md-4">
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
            <Box className="col-12">
              <h4 style={{ marginTop: 35, marginBottom: 10, fontWeight: 600 }}>
                Email of the recipient
              </h4>
              <TextField
                label="Enter the email"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
                onChange={(e) => handleEmailChange(e)}
                error={emailError}
                helperText={emailError ? "Invalid email format" : ""}
              ></TextField>
            </Box>
            <Box className="col-12">
              <h4 style={{ marginTop: 35, marginBottom: 10, fontWeight: 600 }}>
                Note for recipient (Optional)
              </h4>
              <TextField
                label="Enter the note"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                // required
                autoComplete="new-text"
                multiline
                rows={4}
                onChange={(e) => setNote(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box sx={{ textAlign: "right", marginTop: 3 }}>
            <Button
              className="px-8"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "4px",
                marginTop: 4,
                textTransform: "none",
                backgroundColor: "#0284c7",
                fontSize: "16px",
              }}
            >
              Send
            </Button>
          </Box>
        </form>
        {transferCurrencyStatus && (
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
