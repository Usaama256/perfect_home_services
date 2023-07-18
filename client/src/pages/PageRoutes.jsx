import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";
import TopSlider from "../components/TopSlider";
import { fetchServices, fetchSPs } from "../redux/apiCalls";
import { lazyImportRetry } from "../store/lazyDynamicImports";
// import AdminRoutes from "./admin/AdminRoutes";
import {
  AdminAuthPagesGuard,
  AdminPrivateRoutes,
  SPAuthPagesGuard,
  SpPrivateRoutes,
  UserAuthPagesGuard,
  UserPrivateRoutes,
} from "./privateRoutes";
// import SProutes from "./SP/SProutes";
// import SPLogin from "./SP/SPLogin";
// import SPRegister from "./SP/SPRegister";
import Home from "./Home";
// import Page404 from "./Page404";
import Auth from "./Auth";
import ServiceProviders from "./ServiceProviders";
import ServiceProvider from "./ServiceProvider";

// const Home = lazy(() =>
//   import("./Home").then((module) => {
//     console.log(module.default);
//     return module;
//   })
// );
// const Home = lazy(() => lazyImportRetry(() => import("./Home")));
// const Auth = lazy(() => lazyImportRetry(() => import("./Auth")));
const SPlogin = lazy(() => lazyImportRetry(() => import("./SP/SPLogin")));
const SPregister = lazy(() => lazyImportRetry(() => import("./SP/SPRegister")));
// const SPs = lazy(() => lazyImportRetry(() => import("./ServiceProviders")));
// const SingleSP = lazy(() => lazyImportRetry(() => import("./ServiceProvider")));
const P404 = lazy(() => lazyImportRetry(() => import("./Page404")));
const SProutes = lazy(() => lazyImportRetry(() => import("./SP/SProutes")));
const AdminRoutes = lazy(() =>
  lazyImportRetry(() => import("./admin/AdminRoutes"))
);

const PageRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch, false);
    fetchSPs(dispatch, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <TopSlider />
            <Home />
          </>
        }
      />
      <Route
        path="/service/:id"
        element={
          <UserPrivateRoutes>
            <TopSlider />
            <ServiceProviders />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/services/provider/:id"
        element={
          <UserPrivateRoutes>
            <TopSlider />
            <ServiceProvider />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/auth/cl/login"
        element={
          <UserAuthPagesGuard>
            <Auth type={"user"} />
          </UserAuthPagesGuard>
        }
      />
      {/* <Route path="/auth/cl/signup" element={<Auth type={"user"} />} /> */}
      <Route
        path="/auth/ad/login"
        element={
          <AdminAuthPagesGuard>
            <Auth type={"admin"} />
          </AdminAuthPagesGuard>
        }
      />
      <Route
        path="/admin/dash/*"
        element={
          <AdminPrivateRoutes>
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <AdminRoutes />
            </Suspense>
          </AdminPrivateRoutes>
        }
      />
      <Route
        path="/auth/sp/login"
        element={
          <SPAuthPagesGuard>
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <SPlogin />
            </Suspense>
          </SPAuthPagesGuard>
        }
      />
      <Route
        path="/SPdash/*"
        element={
          <SpPrivateRoutes>
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <SProutes />
            </Suspense>
          </SpPrivateRoutes>
        }
      />
      <Route
        path="/auth/sp/signup"
        element={
          <SPAuthPagesGuard>
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <SPregister />
            </Suspense>
          </SPAuthPagesGuard>
        }
      />
      {/* <Route path="/auth/sp/signup" element={<Auth  type={"user"}/>} /> */}
      <Route path="/index.html" element={<Navigate to="/" />} />
      <Route path="/home" element={<Navigate to="/" />} />
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
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default PageRoutes;
