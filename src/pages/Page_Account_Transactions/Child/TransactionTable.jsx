import { Box, Divider } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

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
  const columns = [
    {
      field: "type",
      type: "string",
      headerName: "Type",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      type: "string",
      headerName: "Date",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      type: "number",
      headerName: "Amount",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "currency",
      type: "string",
      headerName: "Currency",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      type: "string",
      headerName: "Status",
      width: 250,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
  ];
  return (
    <div className="container px-10 py-5">
      <Box
        sx={{
          fontSize: "2.6vw",
          fontWeight: 600,
          color: "black",
          display: "inline-flex",
          justifyContent: "start",
        }}
      >
        Transactions
      </Box>
      <Divider sx={{ borderColor: "lightgray" }} />
      <Box sx={{ minHeight: 400, marginTop: "10px" }}>
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
    </div>
  );
}
