import React, { lazy, Suspense, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Preloader from "../../components/Preloader";
import SPLayout from "../../components/sp/SPLayout";
import {
  fetchSPcallsSP,
  fetchSpCommentsSP,
  fetchSpProductsSP,
  SPsigninBypass,
} from "../../redux/apiCalls";
import { lazyImportRetry } from "../../store/lazyDynamicImports";
import { SPApprovalCheckGuard } from "../privateRoutes";
// import SpNotApproved from "./SpNotApproved";
// import Products from "./Products";
// import SPInfo from "./SPInfo";
// import SpHome from "./SpHome";
// import Page404 from "../Page404";

const P404 = lazy(() => lazyImportRetry(() => import("../Page404")));
const Home = lazy(() => lazyImportRetry(() => import("./SpHome")));
const SpInfo = lazy(() => lazyImportRetry(() => import("./SPInfo")));
const Products = lazy(() => lazyImportRetry(() => import("./Products")));
const Reviews = lazy(() => lazyImportRetry(() => import("./Reviews")));
const SpNotApproved = lazy(() =>
  lazyImportRetry(() => import("./SpNotApproved"))
);

const SProutes = () => {
  const path = useLocation().pathname.split("/")[2];
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkApproval, setCheckApproval] = useState(false);

  const timer = () => setCheckApproval(!checkApproval);
  useEffect(() => {
    if (path === "not_approved") {
      SPsigninBypass(user.id, user, dispatch, navigate);
    } else {
      SPsigninBypass(user.id, user, dispatch);
    }
    const i = setInterval(timer, 3000);
    return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkApproval]);

  useEffect(() => {
    if (parseInt(user.approved, 10) === 1) {
      fetchSpProductsSP(user.id, dispatch);
      fetchSPcallsSP(user.id, dispatch);
      fetchSpCommentsSP(user.id, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <SPApprovalCheckGuard>
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
          </SPApprovalCheckGuard>
        }
      />
      <Route
        path="/not_approved"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <SpNotApproved />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <SPApprovalCheckGuard>
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
          </SPApprovalCheckGuard>
        }
      />
      <Route
        path="/reviews"
        element={
          <SPApprovalCheckGuard>
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
          </SPApprovalCheckGuard>
        }
      />
      <Route
        path="/info"
        element={
          <SPApprovalCheckGuard>
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
          </SPApprovalCheckGuard>
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
