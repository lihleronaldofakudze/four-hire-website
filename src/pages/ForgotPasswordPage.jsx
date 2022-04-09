import React, { useState } from "react";

// Component
import NavbarComponent from "../components/NavbarComponent";

// Material UI
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FooterComponent from "../components/FooterComponent";

const ForgotPasswordPage = () => {
  // State
  const [email, setEmail] = useState("");
  return (
    <div
      style={{
        backgroundColor: "grey.100",
        height: "100vh",
      }}
    >
      <NavbarComponent />
      <Container maxWidth="sm">
        <Paper
          sx={{
            my: 5,
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            sx={{
              mb: 3,
            }}
          >
            Reset password
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Please enter your email we will send you a link to reset your
          </Typography>
          <TextField
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
            }}
          >
            Retrieve Account Password
          </Button>
        </Paper>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default ForgotPasswordPage;
