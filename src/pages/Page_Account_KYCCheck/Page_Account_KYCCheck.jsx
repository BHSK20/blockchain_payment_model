import { Box, Button, CircularProgress, Paper } from "@mui/material";
import React, { useState } from "react";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/reducer/loadingReducer";

export default function Page_Account_KYCCheck() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  console.log("image", image);

  const [id, setId] = useState("N/A");
  const [name, setName] = useState("N/A");
  const [dob, setDob] = useState("N/A");
  const [gen, setGen] = useState("N/A");
  const [nat, setNat] = useState("N/A");
  const handleExtract = async (e) => {
    e.preventDefault();
    // Create a FormData object
    let formData = new FormData();
    formData.append('f', image);
    dispatch(setLoading(true)); // Start loading
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('API response:', response.data);
      // Save the response to state
      setId(response.data.id);
      setName(response.data.name);
      setDob(response.data.birth);
      setGen(response.data.sex);
      setNat(response.data.nati);
    } catch (error) {
      console.error('Error making API request:', error);
    } finally {
      dispatch(setLoading(false)); // End loading
    }
  };

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
                  // onChange={({ target: { files } }) => {
                  //   // files[0] && setFileName(files[0].name)
                  //   // if (files) {
                  //   //     setImage(URL.createObjectURL(files[0]))
                  //   // }
                  //   if (files && files[0]) {
                  //     setFileName(files[0].name);
                  //     // Check browser support for URL.createObjectURL
                  //     if (typeof URL !== "undefined" && URL.createObjectURL) {
                  //       try {
                  //         setImage(files[0]);
                  //       } catch (error) {
                  //         console.error("Error creating object URL:", error);
                  //       }
                  //     } else {
                  //       console.error(
                  //         "URL.createObjectURL is not supported in this browser."
                  //       );
                  //     }
                  //   }
                  // }}
                  onChange={({ target }) => {
                    if (target.files && target.files[0]) {
                      setFileName(target.files[0].name);
                      if (typeof URL !== "undefined" && URL.createObjectURL) {
                        try {
                          setImage(target.files[0]);
                        } catch (error) {
                          console.error("Error creating object URL:", error);
                        }
                      } else {
                        console.error(
                          "URL.createObjectURL is not supported in this browser."
                        );
                      }
                    }
                    // Reset the value of the input to allow uploading the same file
                    target.value = null;
                  }}
                />
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
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
              <Button
                className="px-8"
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "4px",
                  marginTop: 2,
                  textTransform: "none",
                  backgroundColor: "#0284c7",
                  fontSize: "16px",
                }}
                onClick={handleExtract}
              >
                Extract
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "40px",
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
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Date of birth</th>
                    <td>{dob}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{gen}</td>
                  </tr>
                  <tr>
                    <th>Nationality</th>
                    <td>{nat}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button
              className="px-8"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "4px",
                marginTop: 2,
                textTransform: "none",
                backgroundColor: "#0284c7",
                fontSize: "16px",
              }}
            >
              Check KYC
            </Button>
          </Box>
          {isLoading && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <CircularProgress />
            </div>)}
        </Paper>
      </Box>
    </div>
  );
}
