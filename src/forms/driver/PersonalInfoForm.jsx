import React from "react";

// Material UI
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const ContactInfoForm = ({
  license,
  setLicense,
  fitness,
  setFitness,
  dui,
  setDui,
  criminal,
  setCriminal,
  smartphone,
  setSmartphone,
  insurance,
  setInsurance,
}) => {
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
          Personal Info
        </Typography>
        <Typography variant="body1" color="textSecondary">
          All information will be verified during the onboarding process.
        </Typography>
        <TextField
          id="license"
          label="Do you have a valid driver's license?"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          id="fitness"
          label="Are you willing and able to lift and carry at least 23kg up a flight of stairs?"
          value={fitness}
          onChange={(e) => setFitness(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          id="smartphone"
          label="Do you have a smartphone?"
          value={smartphone}
          onChange={(e) => setSmartphone(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          id="dui"
          label="Have you been convicted of a DUI or DWI in the past 7 years?"
          value={dui}
          onChange={(e) => setDui(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          id="criminal"
          label="Have you ever been convicted of a felony or violent misdemeanor?"
          value={criminal}
          onChange={(e) => setCriminal(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          id="insurance"
          label="Do you have auto insurance?"
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
      </Paper>
    </Container>
  );
};

export default ContactInfoForm;
