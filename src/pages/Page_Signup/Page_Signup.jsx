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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/apiRequest";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

export default function Page_Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/");
    }
  }, [navigate]);

  const signupStatus = useSelector((state) => state.auth.signup);
  const handleSignup = async (e) => {
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
    // const newUser = {
    //   name: name,
    //   email: email,
    //   password: password,
    // };
    // try {
    //   await dispatch({ type: "saga/signupUser", payload: newUser }).unwrap();
    //   navigate("/login");
    // } catch (error) {
    //   console.log("signup error");
    // }
    // ---------------------------------------------------
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    signupUser(newUser, dispatch, navigate);
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
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Box
        className="overflow-y-scroll"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "78vh",
          position: "relative",
          zIndex: 1,
          marginTop: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <Container
            sx={{
              marginY: 5,
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
                      marginBottom: 0.5,
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
                      marginBottom: 2,
                      textAlign: "center",
                    }}
                  >
                    Signup
                  </Box>
                  <Box>
                    <h4 style={{ marginBottom: 4, fontWeight: 600 }}>Name</h4>
                    <TextField
                      label="Enter your name"
                      variant="outlined"
                      type="text"
                      size="small"
                      fullWidth
                      required
                      autoComplete="new-text"
                      onChange={(e) => setName(e.target.value)}
                      // onInvalid={(e) =>
                      //   e.target.setCustomValidity("Please fill out this field.")
                      // }
                      // onInput={(e) => e.target.setCustomValidity("")}
                    ></TextField>
                    <h4
                      style={{
                        marginTop: 25,
                        marginBottom: 4,
                        fontWeight: 600,
                      }}
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
                      onChange={(e) => handleEmailChange(e)}
                      error={emailError}
                      helperText={emailError ? "Invalid email format" : ""}
                      // onInvalid={(e) =>
                      //   e.target.setCustomValidity("Please fill out this field.")
                      // }
                      // onInput={(e) => e.target.setCustomValidity("")}
                    ></TextField>
                    <h4
                      style={{
                        marginTop: 25,
                        marginBottom: 4,
                        fontWeight: 600,
                      }}
                    >
                      Password
                    </h4>
                    <FormControl
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      // onInvalid={(e) =>
                      //   e.target.setCustomValidity("Please fill out this field.")
                      // }
                      // onInput={(e) => e.target.setCustomValidity("")}
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
                        marginTop: 3,
                        marginBottom: 1,
                        textTransform: "none",
                        backgroundColor: "#0284c7",
                        fontSize: "16px",
                      }}
                    >
                      Sign Up
                    </Button>
                    <Box sx={{ textAlign: "center" }}>
                      Already have an account?
                      <Link
                        to="/login"
                        style={{
                          color: "#0284c7",
                          fontWeight: 600,
                          marginLeft: 4,
                        }}
                      >
                        Log in here
                      </Link>
                    </Box>
                  </Box>
                </form>
              </Container>
            </Paper>
          </Container>
        </Box>
      </Box>
      <Footer />
      {signupStatus.isFetching && (
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
        </div>
      )}
    </Box>
  );
}
