import React, { useState } from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { Box, Button, Container, Paper, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export default function Page_Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "78vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            width: "525px",
            marginTop: 23,
          }}
        >
          <Paper
            sx={{
              boxShadow: 10,
              borderRadius: 3,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 4,
            }}
          >
            <Container>
              <form onSubmit={handleSignup}>
                <Box
                  sx={{
                    fontSize: 32,
                    fontWeight: 700,
                    marginBottom: 1,
                    textAlign: "center",
                    color: "#0284c7",
                  }}
                >
                  BKpay
                </Box>
                <Box
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 3,
                    textAlign: "center",
                  }}
                >
                  Signup
                </Box>
                <Box>
                  <h4 style={{ marginBottom: 5, fontWeight: 600 }}>Name</h4>
                  <TextField
                    label="Enter your name"
                    variant="outlined"
                    type="text"
                    size="small"
                    fullWidth
                    required
                    autoComplete="new-text"
                    onChange={(e) => setName(e.target.value)}
                  ></TextField>
                  <h4
                    style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}
                  >
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
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField>
                  <h4
                    style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}
                  >
                    Password
                  </h4>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Enter your password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Enter your password"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: 4,
                      marginBottom: 2,
                      textTransform: "none",
                      backgroundColor: "#0284c7",
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </Button>
                  <Box sx={{ textAlign: "center" }}>
                    Already have an account?
                    <a
                      href="/login"
                      style={{
                        color: "#0284c7",
                        fontWeight: 600,
                        marginLeft: 4,
                      }}
                    >
                      Log in here
                    </a>
                  </Box>
                </Box>
              </form>
            </Container>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
