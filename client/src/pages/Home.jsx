import React, { useEffect } from "react";
import GenLayout from "../components/GenLayout";
// import TopSlider from "../components/TopSlider";
import ServicesDisplay from "../components/ServicesDisplay";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, fetchSPs } from "../redux/apiCalls";

const Home = () => {
  const { services } = useSelector((state) => state.services);
  const { sPs } = useSelector((state) => state.sPs);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchServices(dispatch, true, services);
    fetchSPs(dispatch, true, sPs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <GenLayout title="Home" nav={true}>
      <ServicesDisplay servicesArr={services} />
    </GenLayout>
  );
};

export default Home;
