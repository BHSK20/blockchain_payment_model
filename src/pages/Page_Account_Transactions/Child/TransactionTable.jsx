import { Box, Divider, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { Fail, Success } from "../../../components/label/TransactionLabel";

export default function TransactionTable() {
  const rows = [
    {
      id: "1812001",
      type: "Transfer",
      date: "27/11/2023",
      amount: 1000,
      currency: "BTC",
      status: "Success",
    },
    {
      id: "1812002",
      type: "Deposit",
      date: "25/11/2023",
      amount: 2000,
      currency: "ETH",
      status: "Success",
    },
    {
      id: "1812003",
      type: "Transfer",
      date: "26/11/2023",
      amount: 3000,
      currency: "USDT",
      status: "Fail",
    },
    {
      id: "1812004",
      type: "Transfer",
      date: "26/12/2023",
      amount: 1500,
      currency: "LTC",
      status: "Success",
    },
    {
      id: "1812005",
      type: "Transfer",
      date: "22/12/2023",
      amount: 500,
      currency: "USDC",
      status: "Fail",
    },
    {
      id: "1812006",
      type: "Deposit",
      date: "16/01/2024",
      amount: 2500,
      currency: "TRX",
      status: "Success",
    },
  ];
  const columns = useMemo(() => [
    {
      field: "id",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: 180,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        return <span style={{ color: "rgb(2 132 199)" }}>{params.value}</span>;
      },
    },
    {
      field: "type",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: 180,
      renderHeader: () => <span>Type</span>,
      renderCell: (params) => {
        return (
          <span
            style={{
              color: params.value === "Transfer" ? "#ff9100" : "#3949AB",
            }}
          >
            {params.value}
          </span>
        );
      },
    },
    {
      field: "date",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: 180,
      renderHeader: () => <span>Date</span>,
      renderCell: (params) => {
        return <span>{params.value}</span>;
      },
    },
    {
      field: "amount",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 180,
      renderHeader: () => <span>Amount</span>,
      renderCell: (params) => {
        return <span>{params.value}</span>;
      },
    },
    {
      field: "currency",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: 180,
      renderHeader: () => <span>Currency</span>,
      renderCell: (params) => {
        return <span>{params.value}</span>;
      },
    },
    {
      field: "status",
      headerAlign: "center",
      align: "center",
      width: 180,
      flex: 1,
      renderHeader: () => <span>Status</span>,
      renderCell: (params) => {
        switch (params.value) {
          case "Success":
            return <Success />;
          case "Fail":
            return <Fail />;
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
                  pageSize: 25,
                },
              },
            }}
            getRowId={(row) => row.id}
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </Box>
  );
}
