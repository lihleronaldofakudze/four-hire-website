import React, { useState } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

// Forms
import ContactInfoForm from "../forms/driver/ContactInfoForm";
import ReviewInfoForm from "../forms/driver/ReviewInfoForm";
import VehicleInfoForm from "../forms/driver/VehicleInfoForm";
import PersonalInfoForm from "../forms/driver/PersonalInfoForm";

// Components
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

// Responsive imports
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Material UI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const steps = ["Contact Info", "Personal Info", "Vehicle", "Review"];

export default function RegisterDriverPage() {
  // Variables
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  // State
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("Hhohho Region");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [license, setLicense] = useState("");
  const [fitness, setFitness] = useState("");
  const [insurance, setInsurance] = useState("");
  const [smartphone, setSmartphone] = useState("");
  const [criminal, setCriminal] = useState("");
  const [dui, setDui] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [registration, setRegistration] = useState("");
  const [equipment, setEquipment] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = () => {
    if (
      (firstName.length !== 0,
      lastName.length !== 0,
      email.length !== 0,
      password.length !== 0,
      phoneNumber.length !== 0,
      region.length !== 0,
      city.length !== 0,
      dateOfBirth.length !== 0,
      license.length !== 0,
      fitness.length !== 0,
      insurance.length !== 0,
      smartphone.length !== 0,
      criminal.length !== 0,
      dui.length !== 0,
      make.length !== 0,
      model.length !== 0,
      type.length !== 0,
      year.length !== 0,
      color.length !== 0,
      licensePlate.length !== 0,
      registration.length !== 0,
      equipment.length !== 0)
    ) {
      navigate("/");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
      <NavbarComponent />
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
        }}
      >
        <Typography
          variant="h3"
          color="textPrimary"
          sx={{
            textAlign: "center",
            my: 2,
            fontWeight: "bold",
          }}
        >
          Register Driver
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            orientation={desktop ? "horizontal" : "vertical"}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSave}
                >
                  Save My Details
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {(() => {
                switch (activeStep) {
                  case 0:
                    return (
                      <ContactInfoForm
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        password={password}
                        phoneNumber={phoneNumber}
                        region={region}
                        cities={cities}
                        city={city}
                        dateOfBirth={dateOfBirth}
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setPhoneNumber={setPhoneNumber}
                        setRegion={setRegion}
                        setCities={setCities}
                        setCity={setCity}
                        setDateOfBirth={setDateOfBirth}
                      />
                    );
                  case 1:
                    return (
                      <PersonalInfoForm
                        license={license}
                        fitness={fitness}
                        insurance={insurance}
                        smartphone={smartphone}
                        criminal={criminal}
                        dui={dui}
                        setLicense={setLicense}
                        setFitness={setFitness}
                        setInsurance={setInsurance}
                        setSmartphone={setSmartphone}
                        setCriminal={setCriminal}
                        setDui={setDui}
                      />
                    );
                  case 2:
                    return (
                      <VehicleInfoForm
                        make={make}
                        model={model}
                        type={type}
                        year={year}
                        color={color}
                        licensePlate={licensePlate}
                        registration={registration}
                        equipment={equipment}
                        setMake={setMake}
                        setModel={setModel}
                        setType={setType}
                        setYear={setYear}
                        setColor={setColor}
                        setLicensePlate={setLicensePlate}
                        setRegistration={setRegistration}
                        setEquipment={setEquipment}
                      />
                    );
                  case 3:
                    return <ReviewInfoForm />;
                  default:
                    return null;
                }
              })()}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "I Understand" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
      <FooterComponent />
    </>
  );
}
