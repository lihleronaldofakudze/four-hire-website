import React, { useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Component
import NavbarComponent from "../components/NavbarComponent";

// Material UI
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FooterComponent from "../components/FooterComponent";

const LoginPage = () => {
  //Variables
  const navigate = useNavigate();

  //State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePage = (page) => {
    navigate(page);
  };

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
            Access your account
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Please enter your email and password to access your account.
          </Typography>
          <TextField
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Button
            variant="text"
            color="secondary"
            sx={{
              mt: 3,
            }}
            onClick={() => changePage("/forgot_password")}
          >
            Forgot Password?
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
            }}
          >
            Continue
          </Button>
          <Button
            variant="text"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
            }}
            onClick={() => changePage("/register")}
          >
            Create an account
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mt: 3,
            }}
            onClick={() => changePage("/register_driver")}
          >
            Become a driver
          </Button>
        </Paper>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default LoginPage;
