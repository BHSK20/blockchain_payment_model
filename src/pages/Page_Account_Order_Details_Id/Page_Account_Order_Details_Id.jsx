import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Page_Account_Order_Details_Id() {
  const { orderid } = useParams();
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
            minHeight: "600px",
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
            Order Details
          </Box>
          <Box sx={{ marginTop: "25px" }}>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th className="col-6 text-primary text-4xl">ID</th>
                    <td className="col-6 text-4xl">20052024</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">
                      Merchant Name
                    </th>
                    <td className="col-6 text-4xl">Shopee</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">Date</th>
                    <td className="col-6 text-4xl">02/04/2024</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">Amount</th>
                    <td className="col-6 text-4xl">1000</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">Currency</th>
                    <td className="col-6 text-4xl">USDT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
          <Box sx={{ textAlign: "left", marginTop: 1 }}>
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
              Make Payment
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
