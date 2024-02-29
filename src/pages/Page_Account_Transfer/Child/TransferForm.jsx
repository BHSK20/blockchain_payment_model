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
import React from "react";

export default function TransferForm() {
  return (
    <div className="container px-10 py-3">
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
          }}
        >
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
                type="text"
                size="small"
                fullWidth
                required
                autoComplete="new-text"
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
                  //   value={crypto}
                  label="Currency"
                  //   onChange={(newValue) => {
                  //     setCrypto(newValue.target.value);
                  //   }}
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
                required
                autoComplete="new-text"
                multiline
                rows={4}
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
        </Paper>
      </Box>
    </div>
  );
}
