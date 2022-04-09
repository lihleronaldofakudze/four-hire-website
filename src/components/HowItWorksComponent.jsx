import React from "react";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const HowItWorksComponent = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          color="textPrimary"
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={1} direction="column" alignItems="left">
          <Typography variant="h5" color="secondary">
            1. Find Your Delivery Pro
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Get a free estimate in the app, set a pickup time and location, and
            find a pro - all in about a minute.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="right"
          sx={{ my: 2 }}
        >
          <Typography variant="h5" color="secondary">
            2. Get Movin’
          </Typography>
          <Typography variant="body1" color="textSecondary">
            The GoShare pros will load, secure, transport and unload your items.
            You just tell them where you want them to put it.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          alignItems="left"
          direction="column"
          sx={{
            mb: 3,
          }}
        >
          <Typography variant="h5" color="secondary">
            3. Track & Pay in the App
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Track the progress of your delivery, pay, tip and review - all in
            the app!
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default HowItWorksComponent;
