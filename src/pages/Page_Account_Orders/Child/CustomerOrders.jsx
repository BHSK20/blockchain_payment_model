import { Box, CircularProgress, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { Fail, Success } from "../../../components/label/TransactionLabel";
import { useSelector } from "react-redux";
import axios from "axios";
import { formatDateTime } from "../../../utils/formatDateTime";

export default function CustomerOrders() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const paymentStatus = useSelector((state) => state.payment.isFetching);
  const fetchCustomerOrders = async () => {
    setLoading(true);
    try {
      const customerOrdersResponse = await axios.get(
        "https://on-shop-blockchain.onrender.com/orders/user",
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("token")).token
            }`,
          },
        }
      );
      console.log("customerOrdersResponse", customerOrdersResponse);
      setRows(
        customerOrdersResponse.data.data ? customerOrdersResponse.data.data : []
      );
      setLoading(false);
    } catch (customerOrdersError) {
      console.log("customerOrdersError", customerOrdersError);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCustomerOrders();
  }, [paymentStatus]);

  // const rows = [
  //   {
  //     id: "2303001",
  //     order_name: "Jenkins Group",
  //     merchant: "FSoft",
  //     amount: 1000,
  //     currency: "BTC",
  //     date: "08/03/2024",
  //   },
  //   {
  //     id: "2303002",
  //     order_name: "Flynn-Morales",
  //     merchant: "Phong Vu",
  //     amount: 2000,
  //     currency: "ETH",
  //     date: "14/03/2024",
  //   },
  //   {
  //     id: "2303003",
  //     order_name: "Bernard, Campbell and Austin",
  //     merchant: "Phong Vu",
  //     amount: 3000,
  //     currency: "USDT",
  //     date: "15/03/2024",
  //   },
  //   {
  //     id: "2303004",
  //     order_name: "Knox-Daugherty",
  //     merchant: "FSoft",
  //     amount: 1500,
  //     currency: "LTC",
  //     date: "17/03/2024",
  //   },
  //   {
  //     id: "2303005",
  //     order_name: "Avila-Clay",
  //     merchant: "Phong Vu",
  //     amount: 500,
  //     currency: "USDC",
  //     date: "18/03/2024",
  //   },
  //   {
  //     id: "2303006",
  //     order_name: "Riley PLC",
  //     merchant: "FSoft",
  //     amount: 2500,
  //     currency: "TRX",
  //     date: "21/03/2024",
  //   },
  // ];

  const columns = useMemo(() => [
    {
      field: "id",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 100,
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
      field: "merchant",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 250,
      renderHeader: () => <span>Merchant Name</span>,
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
