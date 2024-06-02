import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makePayment } from "../../redux/apiRequest";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Page_Account_Order_Details_Id() {
  const dispatch = useDispatch();
  const { orderid } = useParams();

  const [orderDetails, setOrderDetails] = useState(null);

  const makePaymentStatus = useSelector((state) => state.payment?.isFetching);
  const isPaid = useSelector((state) => state.payment?.transactionHash);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://on-shop-blockchain.onrender.com/transfer/${orderid}`,
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

  const handleMakePayment = (e) => {
    e.preventDefault();
    makePayment(orderid, dispatch);
  };

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
          <form onSubmit={handleMakePayment}>
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
              <div className="row">
                <div className="col-12 col-md-6">
                  <img src={orderDetails?.image} alt="Order" />
                </div>
                <div className="col-12 col-md-6">
                  <Box
                    sx={{
                      fontSize: "50px",
                      fontWeight: 600,
                      color: "rgb(57, 73, 171)",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    {orderDetails?.order_name}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "35px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, 0.6)",
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "20px",
                    }}
                  >
                    {/* <span style={{ color: "black" }}>Merchant:</span>{" "}
                    {orderDetails?.merchant} */}
                    Merchant: {orderDetails?.merchant}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "40px",
                      fontWeight: 500,
                      color: "#2E7D32",
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "20px",
                    }}
                  >
                    {orderDetails?.currency} {orderDetails?.amount}
                  </Box>
                </div>
              </div>
              {/* <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th className="col-6 text-primary text-4xl">ID</th>
                      <td className="col-6 text-4xl">{orderid}</td>
                    </tr>
                    <tr>
                      <th className="col-6 text-primary text-4xl">Products</th>
                      <td className="col-6 text-4xl">
                        {orderDetails?.order_name}
                      </td>
                    </tr>
                    <tr>
                      <th className="col-6 text-primary text-4xl">
                        Merchant Name
                      </th>
                      <td className="col-6 text-4xl">
                        {orderDetails?.merchant}
                      </td>
                    </tr>
                    <tr>
                      <th className="col-6 text-primary text-4xl">Amount</th>
                      <td className="col-6 text-4xl">{orderDetails?.amount}</td>
                    </tr>
                    <tr>
                      <th className="col-6 text-primary text-4xl">Currency</th>
                      <td className="col-6 text-4xl">
                        {orderDetails?.currency}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
            </Box>
            <Box sx={{ textAlign: "left", marginTop: 1 }}>
              {isPaid === null ? (
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
              ) : (
                <h4
                  className="text-success text-3xl"
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    fontSize="inherit"
                    sx={{ color: "inherit", display: "inline-block" }}
                  />
                  <span style={{ display: "inline-block" }}>
                    Your order has been paid
                  </span>
                </h4>
              )}
            </Box>
          </form>
          {makePaymentStatus && (
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
    </div>
  );
}
