import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

export default function Page_Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const signupSuccess = localStorage.getItem("signupSuccess");
    if (signupSuccess) {
      Swal.fire({
        title: "You have signed up successfully",
        text: "Please check your email to verify your account.",
        icon: "success",
        confirmButtonColor: "#5a67d8",
      });
      localStorage.removeItem("signupSuccess");
    }
  }, []);

  const loginStatus = useSelector((state) => state.auth.login);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (emailError) {
      Swal.fire({
        title: "The form cannot be submitted",
        text: "Please use a valid email address.",
        icon: "error",
        confirmButtonColor: "#5a67d8",
      });
      return;
    }
    // -------------------- FIX LATER --------------------
    //   const newUser = {
    //     email: email,
    //     password: password,
    //   };
    //   try {
    //     await dispatch({ type: "saga/loginUser", payload: newUser }).unwrap();
    //     navigate("/account/transactions");
    //   } catch (error) {
    //     console.log("login error");
    //   }
    // ---------------------------------------------------
    const newUser = {
      email: email,
      password: password,
    };
    // ---------------------------------------------------
    loginUser(newUser, dispatch, navigate);
    // try {
    //   loginUser(newUser, dispatch, navigate);
    // } catch (err) {
    //   Swal.fire({
    //     title: "You have signed up successfully",
    //     text: "Please check your email to verify your account.",
    //     icon: "success",
    //     confirmButtonColor: "#5a67d8",
    //   });
    // }
    // ---------------------------------------------------
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // ----------------------------------------------------------------------
  // Email Validation
  const [emailError, setEmailError] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(event.target.value) || event.target.value === "") {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  // ----------------------------------------------------------------------

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
              <form onSubmit={handleLogin}>
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
                  Login
                </Box>
                <Box>
                  <h4 style={{ marginBottom: 5, fontWeight: 600 }}>
                    Email Address
                  </h4>
                  <TextField
                    label="Enter your email address"
                    variant="outlined"
                    type="text"
                    // size="small"
                    fullWidth
                    required
                    autoComplete="new-text"
                    onChange={(e) => handleEmailChange(e)}
                    error={emailError}
                    helperText={emailError ? "Invalid email format" : ""}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Please fill out this field.")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  ></TextField>
                  <h4
                    style={{ marginTop: 25, marginBottom: 5, fontWeight: 600 }}
                  >
                    Password
                  </h4>
                  <FormControl
                    variant="outlined"
                    // size="small"
                    fullWidth
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Please fill out this field.")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
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
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Enter your password"
                    />
                  </FormControl>

                  <Box className="row">
                    <Box
                      className="col-6"
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: 1,
                      }}
                    >
                      <a href="/" style={{ color: "#0284c7", fontWeight: 500 }}>
                        Forgot your password?
                      </a>
                    </Box>
                  </Box>

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
                    Log In
                  </Button>
                  <Box sx={{ textAlign: "center" }}>
                    Don't have an account?
                    <a
                      href="/signup"
                      style={{
                        color: "#0284c7",
                        fontWeight: 600,
                        marginLeft: 4,
                      }}
                    >
                      Sign up here
                    </a>
                  </Box>
                </Box>
              </form>
              {loginStatus.isFetching && (
                <div
                  style={{
                    position: "absolute",
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
                </div>
              )}
            </Container>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
