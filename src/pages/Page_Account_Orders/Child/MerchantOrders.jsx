import { Box, CircularProgress, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { Fail, Success } from "../../../components/label/TransactionLabel";
import { useSelector } from "react-redux";
import axios from "axios";
import { formatDateTime } from "../../../utils/formatDateTime";

export default function MerchantOrders() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const paymentStatus = useSelector((state) => state.payment.isFetching);
  const fetchMerchantOrders = async () => {
    setLoading(true);
    try {
      const merchantOrdersResponse = await axios.get(
        "https://on-shop-blockchain.onrender.com/orders/merchant",
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("token")).token
            }`,
          },
        }
      );
      console.log("merchantOrdersResponse", merchantOrdersResponse);
      setRows(merchantOrdersResponse.data.data);
      setLoading(false);
    } catch (merchantOrdersError) {
      console.log("merchantOrdersError", merchantOrdersError);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMerchantOrders();
  }, [paymentStatus]);

  // const rows = [
  //   {
  //     id: "2803001",
  //     order_name: "Order 1",
  //     user: "User 1",
  //     amount: 1000,
  //     currency: "BTC",
  //     date: "21/03/2024",
  //   },
  //   {
  //     id: "2803002",
  //     order_name: "Order 2",
  //     user: "User 2",
  //     amount: 2000,
  //     currency: "ETH",
  //     date: "18/03/2024",
  //   },
  //   {
  //     id: "2803003",
  //     order_name: "Order 3",
  //     user: "User 3",
  //     amount: 3000,
  //     currency: "USDT",
  //     date: "17/03/2024",
  //   },
  //   {
  //     id: "2803004",
  //     order_name: "Order 4",
  //     user: "User 4",
  //     amount: 1500,
  //     currency: "LTC",
  //     date: "15/03/2024",
  //   },
  //   {
  //     id: "2803005",
  //     order_name: "Order 5",
  //     user: "User 5",
  //     amount: 500,
  //     currency: "USDC",
  //     date: "14/03/2024",
  //   },
  //   {
  //     id: "2803006",
  //     order_name: "Order 6",
  //     user: "User 6",
  //     amount: 2500,
  //     currency: "TRX",
  //     date: "08/03/2024",
  //   },
  // ];

  const columns = useMemo(() => [
    {
      field: "id",
      type: "string",
      headerAlign: "left",
      align: "left",
      width: 100,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        return (
          <Tooltip title={params.value} arrow>
            <Box
              sx={{
                // "&:hover": {
                //   cursor: "pointer",
                //   textDecoration: "underline",
                // },
                color: "rgb(2 132 199)",
              }}
            >
              {params.value.slice(0, 6) + "..."}
            </Box>
          </Tooltip>
        );
      },
    },
    {
      field: "order_name",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 250,
      renderHeader: () => <span>Products</span>,
      renderCell: (params) => {
        return (
          <Box
            sx={
              {
                // "&:hover": {
                //   cursor: "pointer",
                //   textDecoration: "underline",
                // },
              }
            }
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "user",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 250,
      renderHeader: () => <span>Customer Email</span>,
      renderCell: (params) => {
        return (
          <Box
            sx={
              {
                // "&:hover": {
                //   cursor: "pointer",
                //   textDecoration: "underline",
                // },
              }
            }
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "amount",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => <span>Amount</span>,
      renderCell: (params) => {
        return (
          <Box
            sx={
              {
                // "&:hover": {
                //   cursor: "pointer",
                //   textDecoration: "underline",
                // },
              }
            }
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "currency",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => <span>Currency</span>,
      renderCell: (params) => {
        return (
          <Box
            sx={
              {
                // "&:hover": {
                //   cursor: "pointer",
                //   textDecoration: "underline",
                // },
              }
            }
          >
            {params.value.toUpperCase()}
          </Box>
        );
      },
    },
    {
      field: "date",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 1,
      renderHeader: () => <span>Date</span>,
      renderCell: (params) => {
        return (
          <Box
            sx={
              {
                // "&:hover": {
                //   cursor: "pointer",
                //   textDecoration: "underline",
                // },
              }
            }
          >
            {formatDateTime(params.value)}
          </Box>
        );
      },
    },
  ]);

  return (
    <Box sx={{ minHeight: 400 }}>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 400,
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          sx={{
            "&.MuiDataGrid-root": {
              borderRadius: 2,
            },
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
              backgroundColor: "rgb(23 23 23)",
              color: "white",
              fontWeight: 700,
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
              color: "white",
            },
            "&.MuiDataGrid-root .MuiCircularProgress-root": {
              color: "black",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "black",
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: {
                debounceMs: 500,
                placeholder: "Search...",
                sx: {
                  width: 300,
                  marginBottom: 1,
                },
              },
            },
          }}
          disableColumnFilter
          disableColumnSelector
          pagination
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          getRowId={(row) => row.id}
          disableRowSelectionOnClick
        />
      )}
    </Box>
  );
}