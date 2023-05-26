import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../../components/Preloader";
import SPLayout from "../../components/sp/SPLayout";
// import SpHome from "./SpHome";
// import Page404 from "../Page404";

const P404 = lazy(() => import("../Page404"));
const Home = lazy(() => import("./SpHome"));

const SProutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <SPLayout title="SP Home">
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
      <Route path="/" element={<Navigate to="/SPdash/home" />} />
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
      <Route path="*" element={<Navigate to="/SPdash/404" />} />
    </Routes>
  );
};

export default SProutes;
