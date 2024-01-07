import React, { useState } from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Page_Signup() {
  const [firstname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
            width: "35%",
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
              padding: 5,
            }}
          >
            <Container>
              <form>
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
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={12}>
                      <h4 style={{ marginBottom: 5, fontWeight: 600 }}>
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
                    </Grid>
                    <Grid item xs={12}>
                      <h4 style={{ marginBottom: 5, fontWeight: 600 }}>
                        Password
                      </h4>
                      <TextField
                        label="Enter your password"
                        variant="outlined"
                        type="password"
                        size="small"
                        fullWidth
                        required
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: 4,
                      textTransform: "none",
                      backgroundColor: "#0284c7",
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </Button>
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
