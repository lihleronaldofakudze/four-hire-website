import React from "react";

// Images
import BoxTruck from "../images/box-truck.png";
import CargoVan from "../images/cargo-van.png";
import PickupTruck from "../images/pickup-truck.png";
import Courier from "../images/courier.png";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const DeliveryTypesComponent = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "grey.100",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          p: 5,
        }}
      >
        <Typography
          variant="h2"
          color="textPrimary"
          sx={{
            my: 2,
          }}
        >
          Eswatini Best Delivery System
        </Typography>
        <Typography variant="h6" color="textSecondary">
          4Hire connects you with vetted delivery pros on demand for help with
          last mile delivery, logistics and moving. From small parcels to
          pallets of cargo, if you need something delivered or moved, we’ve got
          you covered. Our virtual fleet of trucks, vans and cars are available
          to help you in under an hour. For you planners, you can also schedule
          in advance. Get a free estimate before you order on our website or by
          downloading the award winning 4Hire app on iPhone and Android.
        </Typography>
        <Grid
          container
          spacing={5}
          sx={{
            mt: 2,
          }}
          alignItems="center"
          justifyContent="center"
        >
          {types.map((type, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <img src={type.image} alt={type.name} width="100%" />
              <Typography
                variant="h5"
                color="textPrimary"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                {type.name}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                {type.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

const types = [
  {
    image: BoxTruck,
    name: "Box Truck",
    description:
      "Best for full truckload (FTL), Less than truckload (LTL), pallets, 1-2 bedroom apartments, small homes",
  },
  {
    image: CargoVan,
    name: "Cargo Van",
    description:
      "Great for cargo that need to be kept dry, 1-4 big box items, studio apartments, queen mattress w/ box",
  },
  {
    image: PickupTruck,
    name: "Pickup Truck",
    description:
      "Great for 1-2 big box items, single pieces of furniture, lumber & home improvement",
  },
  {
    image: Courier,
    name: "Courier",
    description:
      "Perfect for small parcels, documents, packages, and retail purchases. No furniture",
  },
];

export default DeliveryTypesComponent;
