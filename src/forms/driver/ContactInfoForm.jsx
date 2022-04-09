import React, { useEffect } from "react";

// Constants
import {
  eswatiniRegions,
  manziniCities,
  hhohhoCities,
  lubomboCities,
  shiselweniCities,
} from "../../services/constants";

// Material UI
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const ContactInfoForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  password,
  setPassword,
  region,
  setRegion,
  city,
  setCity,
  cities,
  setCities,
  dateOfBirth,
  setDateOfBirth,
}) => {
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
  }, [region, setCities]);

  return (
    <Container
      sx={{
        p: 3,
      }}
    >
      <Paper sx={{ p: 3 }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Contact Info
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Please enter all required details
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              type="text"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              type="text"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              type="email"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              type="password"
              margin="normal"
            />
          </Grid>
        </Grid>
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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone"
              label="Phone"
              value={email}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              type="text"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="dateOfBirth"
              label="Date of Birth"
              value={password}
              onChange={(e) => setDateOfBirth(e.target.value)}
              fullWidth
              type="date"
              margin="normal"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactInfoForm;
