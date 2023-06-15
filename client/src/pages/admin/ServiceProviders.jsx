import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceProvider from "../../components/admin/sps/ServiceProvider";
import SPsMain from "../../components/admin/sps/SPsMain";

const ServiceProviders = () => {
  return (
    <Routes>
      <Route path="" element={<SPsMain />} />
      <Route path="/:id" element={<ServiceProvider />} />
    </Routes>
  );
};

export default ServiceProviders;
