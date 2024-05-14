import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function Page_Account_KYCCheck() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  // console.log("image", image);
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
            KYC Check
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "2px dashed rgb(2 132 199)",
                  borderRadius: "5px",
                  width: "60%",
                  marginTop: 35,
                  cursor: "pointer",
                }}
                onClick={() => document.querySelector(".input-field").click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  hidden
                  onChange={({ target: { files } }) => {
                    // files[0] && setFileName(files[0].name)
                    // if (files) {
                    //     setImage(URL.createObjectURL(files[0]))
                    // }
                    if (files && files[0]) {
                      setFileName(files[0].name);
                      // Check browser support for URL.createObjectURL
                      if (typeof URL !== "undefined" && URL.createObjectURL) {
                        try {
                          setImage(URL.createObjectURL(files[0]));
                        } catch (error) {
                          console.error("Error creating object URL:", error);
                        }
                      } else {
                        console.error(
                          "URL.createObjectURL is not supported in this browser."
                        );
                      }
                    }
                  }}
                />
                {image ? (
                  <img
                    src={image}
                    alt="idcard"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  ></img>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 120,
                      textAlign: "center",
                    }}
                  >
                    <CloudUploadRoundedIcon
                      fontSize="large"
                      sx={{
                        color: "rgb(2 132 199)",
                      }}
                    ></CloudUploadRoundedIcon>
                    <p>Browse to upload your Identity Card</p>
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <span>{fileName}</span>
                <DeleteRoundedIcon
                  sx={{
                    cursor: "pointer",
                    // marginLeft: 5
                    color: "#ff1744",
                  }}
                  onClick={() => {
                    setFileName("No selected file");
                    setImage(null);
                  }}
                ></DeleteRoundedIcon>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="table-responsive" style={{ width: "60%" }}>
              <table className="table table-hover table-info table-bordered border-dark">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Identity Card Number</th>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th>Date of birth</th>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th>Nationality</th>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
