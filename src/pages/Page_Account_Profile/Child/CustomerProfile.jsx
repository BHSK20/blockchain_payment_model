import React, { useRef, useState } from "react";
import avatar from "../../../assets/avatar.png";
import { Box, Button, TextField } from "@mui/material";

export default function CustomerProfile() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="user-avatar.png"
              style={{ width: "180px", height: "180px", borderRadius: "100%" }}
            />
          ) : (
            <img
              src={avatar}
              alt="default-avatar.png"
              style={{ width: "180px", height: "180px" }}
            />
          )}

          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-upload-input"
          />
        </div>
        <label
          htmlFor="image-upload-input"
          style={{ fontSize: "20px", fontWeight: 500, cursor: "pointer" }}
        >
          {image ? image.name : "Upload your avatar"}
        </label>
      </Box>
      <Box
        className="row"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="col-12 col-sm-8 col-md-6 col-lg-4">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
            Name
          </h4>
          <TextField
            label="Enter your name"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            required
            autoComplete="new-text"
            value={"kaka"} // FOR TEMPORARY DEMO
          ></TextField>
        </Box>
        <Box className="col-12 col-sm-8 col-md-6 col-lg-4">
          <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
            Email Address
          </h4>
          <TextField
            label="Enter your email address"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            required
            autoComplete="new-text"
            value={"giabao515151@gmail.com"} // FOR TEMPORARY DEMO
          ></TextField>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Button
          className="px-8"
          type="submit"
          variant="contained"
          size="large"
          sx={{
            borderRadius: "4px",
            marginTop: 3,
            textTransform: "none",
            backgroundColor: "#0284c7",
            fontSize: "16px",
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}
