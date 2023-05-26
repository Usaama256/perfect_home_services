import React from "react";
import GenLayout from "../components/GenLayout";
import TopSlider from "../components/TopSlider";
import ServicesDisplay from "../components/ServicesDisplay";

const Home = () => {
  return (
    <GenLayout title="Home" nav={true}>
      <ServicesDisplay />
    </GenLayout>
  );
};

export default Home;
