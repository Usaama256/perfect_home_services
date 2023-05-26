import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../../components/Preloader";
import SPLayout from "../../components/sp/SPLayout";
// import AdminHome from "./AdminHome";
// import Page404 from "../Page404";

const P404 = lazy(() => import("../Page404"));
const Home = lazy(() => import("./AdminHome"));

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <SPLayout title="Admin Home">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Home />
            </Suspense>
          </SPLayout>
        }
      />
      <Route path="/" element={<Navigate to="/admin/dash/home" />} />
      <Route
        path="/404"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <P404 />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/admin/dash/404" />} />
    </Routes>
  );
};

export default AdminRoutes;
