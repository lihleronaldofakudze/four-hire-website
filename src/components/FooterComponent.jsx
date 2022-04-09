import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const FooterComponent = () => {
  return (
    <AppBar position="static" color="secondary" sx={{ p: 3 }}>
      <Toolbar>
        <Grid container spacing={1}>
          {otherLinks.map((link, index) => (
            <Button
              variant="text"
              color="inherit"
              key={link.name}
              sx={{ mr: 2 }}
            >
              {link.name}
            </Button>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const otherLinks = [
  { name: "Contact Us", link: "/contact" },
  { name: "Reviews", link: "/reviews" },
  { name: "Terms and Conditions", link: "/terms" },
  { name: "About Us", link: "/about" },
];

export default FooterComponent;
