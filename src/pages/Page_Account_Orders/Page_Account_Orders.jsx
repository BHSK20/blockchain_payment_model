import { Box, Divider, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import CustomerOrders from "./Child/CustomerOrders";
import MerchantOrders from "./Child/MerchantOrders";
import PortraitIcon from "@mui/icons-material/Portrait";
import StoreIcon from "@mui/icons-material/Store";

export default function Page_Account_Orders() {
  const [value, setValue] = useState("1");

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
            Order Transactions
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  aria-label="Tabs menu"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{
                    "& .MuiTabs-indicator": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <Tab
                    label="Customer Orders"
                    value="1"
                    sx={{
                      textTransform: "none",
                      fontSize: 18,
                      fontWeight: 500,
                      marginRight: 4,
                      color: "rgba(0, 0, 0, 0.85)",
                      "&:hover": {
                        color: "rgba(190, 190, 190, 0.85)",
                      },
                      "&.Mui-selected": {
                        color: "black",
                      },
                    }}
                    icon={<PortraitIcon fontSize="medium" />}
                    // iconPosition="start"
                  />
                  <Tab
                    label="Merchant Orders"
                    value="2"
                    sx={{
                      textTransform: "none",
                      fontSize: 18,
                      fontWeight: 500,
                      color: "rgba(0, 0, 0, 0.85)",
                      "&:hover": {
                        color: "rgba(190, 190, 190, 0.85)",
                      },
                      "&.Mui-selected": {
                        color: "black",
                      },
                    }}
                    icon={<StoreIcon fontSize="medium" />}
                    // iconPosition="start"
                  />
                </TabList>
                <Divider
                  sx={{ borderColor: "lightgray", borderBottomWidth: 1 }}
                />
              </Box>
              <TabPanel value="1">
                <CustomerOrders />
              </TabPanel>
              <TabPanel value="2">
                <MerchantOrders />
              </TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
