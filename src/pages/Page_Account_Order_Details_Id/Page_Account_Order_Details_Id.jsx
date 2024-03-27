import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page_Account_Order_Details_Id() {
  const { orderid } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://on-shop-blockchain.onrender.com/transfer/295640073894c4627d8c9ed4`,
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("token")).token
              }`,
            },
          }
        );
        console.log("response", response);
        setOrderDetails(response.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [orderid]);
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
                    <td className="col-6 text-4xl">{orderid}</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">Products</th>
                    <td className="col-6 text-4xl">
                      {orderDetails.order_name}
                    </td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">
                      Merchant Name
                    </th>
                    <td className="col-6 text-4xl">{orderDetails.merchant}</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">Amount</th>
                    <td className="col-6 text-4xl">{orderDetails.amount}</td>
                  </tr>
                  <tr>
                    <th className="col-6 text-primary text-4xl">Currency</th>
                    <td className="col-6 text-4xl">{orderDetails.currency}</td>
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
