import React from "react";

// Components
import NavbarComponent from "../components/NavbarComponent";
import DownloadAppsComponent from "../components/DownloadAppsComponent";
import DeliveryTypesComponent from "../components/DeliveryTypesComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => (
  <>
    <NavbarComponent />
    <DeliveryTypesComponent />
    <HowItWorksComponent />
    <DownloadAppsComponent />
    <FooterComponent />
  </>
);

export default HomePage;
