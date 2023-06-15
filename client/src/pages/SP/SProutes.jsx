import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../../components/Preloader";
import SPLayout from "../../components/sp/SPLayout";
import { lazyImportRetry } from "../../store/requestMethods";
// import Products from "./Products";
// import SPInfo from "./SPInfo";
// import SpHome from "./SpHome";
// import Page404 from "../Page404";

const P404 = lazy(() => lazyImportRetry(() => import("../Page404")));
const Home = lazy(() => lazyImportRetry(() => import("./SpHome")));
const SpInfo = lazy(() => lazyImportRetry(() => import("./SPInfo")));
const Products = lazy(() => lazyImportRetry(() => import("./Products")));
const Reviews = lazy(() => lazyImportRetry(() => import("./Reviews")));

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
      <Route
        path="/products"
        element={
          <SPLayout title="SP Products">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Products />
            </Suspense>
          </SPLayout>
        }
      />
      <Route
        path="/reviews"
        element={
          <SPLayout title="SP Reviews">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Reviews />
            </Suspense>
          </SPLayout>
        }
      />
      <Route
        path="/info"
        element={
          <SPLayout title="SP Info">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <SpInfo />
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
            <P404 src="sp" />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/SPdash/404" />} />
    </Routes>
  );
};

export default SProutes;
