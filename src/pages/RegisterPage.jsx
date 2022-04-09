import React, { useState, useEffect } from "react";

// Data
import {
  eswatiniRegions,
  manziniCities,
  hhohhoCities,
  lubomboCities,
  shiselweniCities,
} from "../services/constants";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Components
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

// Material UI
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

const RegisterPage = () => {
  const navigate = useNavigate();

  // State

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("Hhohho Region");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");

  const changePage = (page) => {
    navigate(page);
  };

  useEffect(() => {
    if (region === "Manzini Region") {
      setCities(manziniCities);
    } else if (region === "Hhohho Region") {
      setCities(hhohhoCities);
    } else if (region === "Lubombo Region") {
      setCities(lubomboCities);
    } else if (region === "Shiselweni Region") {
      setCities(shiselweniCities);
    }
  }, [region]);

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
            Create your account
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Please enter all require details to create your account.
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <TextField
                id="name"
                label="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="surname"
                label="Surname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <TextField
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="confirm_password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            id="mobile_number"
            label="Mobile Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <TextField
                id="region"
                label="Region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                margin="normal"
                fullWidth
                select
              >
                {eswatiniRegions.map((option) => (
                  <MenuItem value={option} key={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="city"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                margin="normal"
                fullWidth
                select
              >
                {cities.map((option) => (
                  <MenuItem value={option} key={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
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
            onClick={() => changePage("/login")}
          >
            Access my account
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

export default RegisterPage;
