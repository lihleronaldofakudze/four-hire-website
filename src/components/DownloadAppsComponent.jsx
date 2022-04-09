import React from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Images
import AppStore from "../images/app-store.png";
import GooglePlay from "../images/google-play.png";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const DownloadAppsComponent = () => {
  const navigate = useNavigate();

  const changePage = (page) => {
    navigate(page);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: 2,
        textAlign: "center",
        bgcolor: "grey.100",
      }}
    >
      <Typography variant="h4" color="primary">
        Download Application
      </Typography>
      <Typography variant="h6" color="textPrimary" sx={{ fontWeight: "bold" }}>
        Use our mobile app to get real-time status updates on the go and
        communicate with your driver.
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          mt: 2,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <img src={GooglePlay} alt="Google Play" />
        <img
          src={AppStore}
          alt="App Store"
          style={{
            marginLeft: "1rem",
          }}
        />
      </Grid>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          mt: 2,
        }}
        onClick={() => changePage("/register_driver")}
      >
        Become A Driver
      </Button>
    </Container>
  );
};

export default DownloadAppsComponent;
