import React from "react";

// Material UI
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const ContactInfoForm = ({
  make,
  setMake,
  model,
  setModel,
  type,
  setType,
  year,
  setYear,
  color,
  setColor,
  licensePlate,
  setLicensePlate,
  registration,
  setRegistration,
  equipment,
  setEquipment,
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
          Vehicle Info
        </Typography>
        <Typography variant="body1" color="textSecondary">
          All information will be verified during the onboarding process.
        </Typography>
        <TextField
          id="make"
          label="Vehicle Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          id="model"
          label="Car Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          id="type"
          label="Vehicle Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Car">Car</MenuItem>
          <MenuItem value="Truck">Truck</MenuItem>
          <MenuItem value="Motorcycle">Motorcycle</MenuItem>
          <MenuItem value="Bicycle">Bicycle</MenuItem>
        </TextField>
        <TextField
          id="color"
          label="Vehicle Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="color"
          fullWidth
          margin="normal"
        />
        <TextField
          id="year"
          label="Vehicle Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
          type="date"
          margin="normal"
        />
        <TextField
          id="registration"
          label="Is Vehicle Registered?"
          value={registration}
          onChange={(e) => setRegistration(e.target.value)}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          id="license-plate"
          label="License Plate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          id="equipment"
          label="Which equipment do you have?"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          fullWidth
          margin="normal"
        />
      </Paper>
    </Container>
  );
};

export default ContactInfoForm;
