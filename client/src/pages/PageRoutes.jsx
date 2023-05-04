import React from "react";
import Home from "./Home";
import Cart from "./Cart";
import { Navigate, Route, Routes } from "react-router";
import Page404 from "./Page404";
import Product from "./Product";
import Order from "./Order";
import Login from "./admin/Login";
import Index from "./admin/Index";
import Auth from "./Auth";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/admin" element={<Index />} />
      <Route path="/breusa-auth" element={<Auth />} />
      <Route path="/index.html" element={<Navigate to="/" />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default PageRoutes;
