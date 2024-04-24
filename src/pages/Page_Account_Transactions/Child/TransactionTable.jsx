import {
  Box,
  CircularProgress,
  Divider,
  LinearProgress,
  Paper,
  Tooltip,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import {
  Fail,
  Pending,
  Success,
} from "../../../components/label/TransactionLabel";
import axios from "axios";
import { useSelector } from "react-redux";
import { formatDateTime } from "../../../utils/formatDateTime";

export default function TransactionTable() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const transferStatus = useSelector((state) => state.transfer.isFetching);
  const fetchUserTransactions = async () => {
    setLoading(true);
    try {
      const transactionsResponse = await axios.get(
        "https://on-shop-blockchain.onrender.com/transactions",
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("token")).token
            }`,
          },
        }
      );
      console.log("transactionsResponse", transactionsResponse);
      setRows(transactionsResponse.data.data);
      setLoading(false);
    } catch (transactionsError) {
      console.log("transactionsError", transactionsError);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserTransactions();
  }, [transferStatus]);

  // const rows = [
  //   {
  //     id: "1812001",
  //     type: "Transfer",
  //     date: "27/11/2023",
  //     amount: 1000,
  //     currency: "BTC",
  //     status: "Success",
  //   },
  //   {
  //     id: "1812002",
  //     type: "Deposit",
  //     date: "25/11/2023",
  //     amount: 2000,
  //     currency: "ETH",
  //     status: "Success",
  //   },
  //   {
  //     id: "1812003",
  //     type: "Transfer",
  //     date: "26/11/2023",
  //     amount: 3000,
  //     currency: "USDT",
  //     status: "Fail",
  //   },
  //   {
  //     id: "1812004",
  //     type: "Transfer",
  //     date: "26/12/2023",
  //     amount: 1500,
  //     currency: "LTC",
  //     status: "Success",
  //   },
  //   {
  //     id: "1812005",
  //     type: "Transfer",
  //     date: "22/12/2023",
  //     amount: 500,
  //     currency: "USDC",
  //     status: "Fail",
  //   },
  //   {
  //     id: "1812006",
  //     type: "Deposit",
  //     date: "16/01/2024",
  //     amount: 2500,
  //     currency: "TRX",
  //     status: "Pending",
  //   },
  // ];

  const columns = useMemo(() => [
    {
      field: "id",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 180,
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
              {params.value.slice(0, 12) + "..."}
            </Box>
          </Tooltip>
        );
      },
    },
    {
      field: "type",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 180,
      renderHeader: () => <span>Type</span>,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              // "&:hover": {
              //   cursor: "pointer",
              //   textDecoration: "underline",
              // },
              // color: params.value === "Transfer" ? "#3949AB" : "#ff9100",
              color: params.value === "Transfer" ? "#0c3c90" : "#f7743c",
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "date",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 180,
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
    {
      field: "amount",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 180,
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
      minWidth: 180,
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
      field: "status",
      headerAlign: "center",
      align: "center",
      minWidth: 180,
      flex: 1,
      renderHeader: () => <span>Status</span>,
      renderCell: (params) => {
        switch (params.value) {
          case "Success":
            return <Success />;
          case "Fail":
            return <Fail />;
          case "Pending":
            return <Pending />;
        }
      },
    },
  ]);
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
          Transactions
        </Box>
        {/* <Divider sx={{ borderColor: "gray", borderBottomWidth: 1 }} /> */}
        <Box sx={{ minHeight: 400, marginTop: "25px" }}>
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
      </Paper>
    </Box>
  );
}
