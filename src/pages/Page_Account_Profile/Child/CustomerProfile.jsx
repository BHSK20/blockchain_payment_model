import React, { useEffect, useRef, useState } from "react";
import avatar from "../../../assets/avatar.png";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReactFlagsSelect from "react-flags-select";
import { countries } from "../../../data/countries";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../../../redux/apiRequest";

export default function CustomerProfile({ customerData }) {
  const dispatch = useDispatch();

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

  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [dob, setDob] = useState(null);
  const [gen, setGen] = useState(null);
  const [natCode, setNatCode] = useState(null);
  const [nat, setNat] = useState(null);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("id", id);
    console.log("name", name);
    console.log("gen", gen);
    console.log("natCode", natCode);
    console.log("nat", nat);
    console.log("dob", dob);
    const birthday = new Date(dob.$d);
    console.log("birthday", birthday);
    const birthdayData = birthday.toJSON();
    console.log("birthdayData", birthdayData);
    const updatedCustomer = {
      name: name,
      card_number: id,
      date_of_birth: birthdayData.slice(0, 10),
      gender: gen,
      nationality: nat,
    };
    console.log("updatedCustomer", updatedCustomer);
  };

  return (
    <form onSubmit={handleUpdate}>
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
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "100%",
                }}
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
        <Box sx={{ marginTop: "15px", textAlign: "center" }}>
          <span className="text-danger text-xl" style={{ fontWeight: 600 }}>
            Wallet Address:{" "}
          </span>
          <span className="text-lg">{customerData?.public_key}</span>
        </Box>
        <Box
          className="row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 50px",
          }}
        >
          <Box className="col-12 col-sm-9 col-md-6">
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
              onChange={(e) => setName(e.target.value)}
              value={customerData?.name}
              // value={name || ""}
              InputLabelProps={{ shrink: true }}
            ></TextField>
          </Box>
          <Box className="col-12 col-sm-9 col-md-6">
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
              value={customerData?.email}
              InputLabelProps={{ shrink: true }}
              // disabled
            ></TextField>
          </Box>
          <Box className="col-12 col-sm-9 col-md-6">
            <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
              Identity Card Number
            </h4>
            <TextField
              label="Enter your identity card number"
              variant="outlined"
              type="number"
              size="small"
              fullWidth
              required
              autoComplete="new-text"
              onChange={(e) => setId(e.target.value)}
              // value={id || ""}
              // InputLabelProps={{ shrink: true }}
            ></TextField>
          </Box>
          <Box className="col-12 col-sm-9 col-md-6">
            <h4 style={{ marginTop: 30, marginBottom: 0, fontWeight: 600 }}>
              Date of birth
            </h4>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Choose your date of birth"
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small", required: true } }}
                  onChange={(newValue) => {
                    setDob(newValue);
                  }}
                  format="DD/MM/YYYY"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box className="col-12 col-sm-9 col-md-6">
            <h4 style={{ marginTop: 30, marginBottom: 8, fontWeight: 600 }}>
              Nationality
            </h4>
            <ReactFlagsSelect
              selected={natCode || ""}
              onSelect={(code) => {
                setNatCode(code);
                setNat(countries[code]);
              }}
              placeholder="Choose your nationality"
              searchable
              searchPlaceholder="Search countries"
            />
          </Box>
          <Box className="col-12 col-sm-9 col-md-6">
            <h4 style={{ marginTop: 30, marginBottom: 4, fontWeight: 600 }}>
              Gender
            </h4>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                onChange={(newValue) => {
                  setGen(newValue.target.value);
                }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
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
    </form>
  );
}
