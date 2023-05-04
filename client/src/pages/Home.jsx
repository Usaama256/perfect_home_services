import React from "react";
import Layout from "../components/Layout";
import Featured from "../components/Featured";
import Products from "../components/Products";

const Home = () => {
  return (
    <Layout>
      <Featured />
      <Products />
    </Layout>
  );
};

export default Home;
