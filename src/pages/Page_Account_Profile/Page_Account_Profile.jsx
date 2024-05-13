import { Box, Divider, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useEffect, useState } from "react";
import CustomerProfile from "./Child/CustomerProfile";
import MerchantProfile from "./Child/MerchantProfile";
import PortraitIcon from "@mui/icons-material/Portrait";
import StoreIcon from "@mui/icons-material/Store";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Page_Account_Profile() {
  const [value, setValue] = useState("1");

  // const userInformation = useSelector((state) => state.auth.login.currentUser);

  // ---------------------------------------------------------
  // const userInformation = JSON.parse(localStorage.getItem("user"));
  // IMPORTANT: GET USER INFORMATION
  const [userInformation, setUserInformation] = useState(null);
  const fetchUserInformation = async () => {
    try {
      const informationResponse = await axios.get(
        `https://on-shop-blockchain.onrender.com/user/payload?token=${
          JSON.parse(localStorage.getItem("token")).token
        }`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("token")).token
            }`,
          },
        }
      );
      console.log("informationResponse", informationResponse);
      setUserInformation(informationResponse.data.data);
    } catch (informationError) {
      console.log("informationError", informationError);
    }
  };

  useEffect(() => {
    fetchUserInformation();
  }, []); // Call each time user updates the profile
  // ---------------------------------------------------------

  const [merchantData, setMerchantData] = useState(null);
  useEffect(() => {
    const fetchMerchantData = async (email) => {
      try {
        const merchantResponse = await axios.get(
          `https://on-shop-blockchain.onrender.com/merchant?email=${email}`
        );
        console.log("merchantResponse", merchantResponse);
        setMerchantData(merchantResponse.data.data);
      } catch (merchantError) {
        console.log("merchantError", merchantError);
      }
    };
    if (userInformation && userInformation.role === "MERCHANT") {
      fetchMerchantData(userInformation.email);
    }
  }, [userInformation?.email]);

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
                <CustomerProfile customerData={userInformation} />
              </TabPanel>
              <TabPanel value="2">
                <MerchantProfile merchantData={merchantData} />
              </TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
