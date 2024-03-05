import { Box, Divider, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import CustomerProfile from "./Child/CustomerProfile";
import MerchantProfile from "./Child/MerchantProfile";
import PortraitIcon from "@mui/icons-material/Portrait";
import StoreIcon from "@mui/icons-material/Store";

export default function Page_Account_Profile() {
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
            Profile
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
                    label="Customer Profile"
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
                    label="Merchant Profile"
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
                <CustomerProfile />
              </TabPanel>
              <TabPanel value="2">
                <MerchantProfile />
              </TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
