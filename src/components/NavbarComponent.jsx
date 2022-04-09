import React from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const changePage = (page) => {
    navigate(page);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h4"
            onClick={() => changePage("/")}
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            4 Hire
          </Typography>
          <Box>
            <Button
              variant="text"
              color="inherit"
              sx={{
                mr: 2,
              }}
              onClick={() => changePage("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => changePage("/book")}
            >
              Book a Ride
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
