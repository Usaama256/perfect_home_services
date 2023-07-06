import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../../components/Preloader";
import SPLayout from "../../components/admin/AdminLayout";
import { lazyImportRetry } from "../../store/lazyDynamicImports";
import { useDispatch } from "react-redux";
import {
  fetchServicesAdmin,
  fetchSPsAdmin,
  fetchUsersAdmin,
} from "../../redux/apiCalls";
// import Profile from "./Profile";
// import ServiceProvider from "./ServiceProvider";
// import User from "./User";
// import Settings from "./Settings";
// import Users from "./Users";
// import ServiceProviders from "./ServiceProviders";
// import Services from "./Services";
// import AdminHome from "./AdminHome";
// import Page404 from "../Page404";

const P404 = lazy(() => lazyImportRetry(() => import("../Page404")));
const Home = lazy(() => lazyImportRetry(() => import("./AdminHome")));
const Services = lazy(() => lazyImportRetry(() => import("./Services")));
const ServiceProviders = lazy(() =>
  lazyImportRetry(() => import("./ServiceProviders"))
);
// const ServiceProvider = lazy(() =>
//   lazyImportRetry(() => import("./ServiceProvider"))
// );
const Users = lazy(() => lazyImportRetry(() => import("./Users")));
const User = lazy(() => lazyImportRetry(() => import("./User")));
const Settings = lazy(() => lazyImportRetry(() => import("./Settings")));
const Profile = lazy(() => lazyImportRetry(() => import("./Profile")));

const AdminRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSPsAdmin(dispatch);
    fetchUsersAdmin(dispatch);
    fetchServicesAdmin(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      <Route
        path="/services"
        element={
          <SPLayout title="Admin Services">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Services />
            </Suspense>
          </SPLayout>
        }
      />
      <Route
        path="/sps/*"
        element={
          <SPLayout title="Admin SPs">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <ServiceProviders />
            </Suspense>
          </SPLayout>
        }
      />
      {/* <Route
        path="/sp/:id"
        element={
          <SPLayout title="Admin SP">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <ServiceProvider />
            </Suspense>
          </SPLayout>
        }
      /> */}
      <Route
        path="/users"
        element={
          <SPLayout title="Admin Users">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Users />
            </Suspense>
          </SPLayout>
        }
      />
      <Route
        path="/user/:id"
        element={
          <SPLayout title="Admin Users">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <User />
            </Suspense>
          </SPLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <SPLayout title="Admin Settings">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Settings />
            </Suspense>
          </SPLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <SPLayout title="Admin Account">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Profile />
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
            <P404 src="ad" />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/admin/dash/404" />} />
    </Routes>
  );
};

export default AdminRoutes;
