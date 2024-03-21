import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { Fail, Success } from "../../../components/label/TransactionLabel";

export default function MerchantOrders() {
  const rows = [
    {
      id: "2803001",
      date: "21/03/2024",
      amount: 1000,
      currency: "BTC",
      status: "Success",
    },
    {
      id: "2803002",
      date: "18/03/2024",
      amount: 2000,
      currency: "ETH",
      status: "Success",
    },
    {
      id: "2803003",
      date: "17/03/2024",
      amount: 3000,
      currency: "USDT",
      status: "Fail",
    },
    {
      id: "2803004",
      date: "15/03/2024",
      amount: 1500,
      currency: "LTC",
      status: "Success",
    },
    {
      id: "2803005",
      date: "14/03/2024",
      amount: 500,
      currency: "USDC",
      status: "Fail",
    },
    {
      id: "2803006",
      date: "08/03/2024",
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
      width: 220,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        return <span style={{ color: "rgb(2 132 199)" }}>{params.value}</span>;
      },
    },
    {
      field: "date",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: 220,
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
      width: 220,
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
      width: 220,
      renderHeader: () => <span>Currency</span>,
      renderCell: (params) => {
        return <span>{params.value}</span>;
      },
    },
    {
      field: "status",
      headerAlign: "center",
      align: "center",
      width: 220,
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
    <Box sx={{ minHeight: 400 }}>
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
  );
}
