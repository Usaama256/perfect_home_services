// import axios from "axios";
import { myRequest } from "../store/requestMethods";
import {
  servicesFetchStart,
  servicesFetchSuccess,
  servicesFetchFail,
  servicesFetchRefreshStart,
  servicesFetchRefreshSuccess,
  // servicesCleanup,
  sPsFetchStart,
  sPsFetchSuccess,
  sPsFetchFail,
  sPsFetchRefreshStart,
  sPsFetchRefreshSuccess,
  // sPsCleanup,
  loginStart,
  byPassloginStart,
  loginSuccess,
  loginFail,
  userCleanup,
  setServices,
  setUsers,
  setSps,
  adminDataCleanup,
  setProducts,
  setComments,
  setCallings,
  spDataCleanup,
} from "./ReduxSlices";

// axios.defaults.withCredentials = true;

//Fetching services
export const fetchServices = async (dispatch, refresh, oldServices) => {
  if (refresh === true) {
    try {
      dispatch(servicesFetchRefreshStart());
      const res = await myRequest.get("/user.api/fetchServices");
      if (res.status === 200) {
        if (JSON.stringify(res.data) === JSON.stringify(oldServices)) {
          return;
        } else {
          dispatch(servicesFetchRefreshSuccess(res.data));
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response, err.message);
      } else if (err.request) {
        if (err.request.status) {
          console.error(err.message, err.request);
        } else {
          console.log(err.request, err.message);
        }
      } else {
        console.log(err.message);
      }
    }
  } else {
    try {
      dispatch(servicesFetchStart());
      const res = await myRequest.get("/user.api/fetchServices");
      if (res.status === 200) {
        dispatch(servicesFetchSuccess(res.data));
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response, err.message);
        dispatch(servicesFetchFail(err.response.data));
      } else if (err.request) {
        if (err.request.status) {
          console.error(err.message, err.request);
          dispatch(servicesFetchFail(err.request.response));
        } else {
          console.log(err.request, err.message);
          dispatch(servicesFetchFail("Connection Failed Or Refused"));
        }
      } else {
        console.log(err.message);
        dispatch(servicesFetchFail(err.message));
      }
    }
  }
};

//Fetching SPs
export const fetchSPs = async (dispatch, refresh, oldSps) => {
  if (refresh === true) {
    try {
      dispatch(sPsFetchRefreshStart());
      const res = await myRequest.get("/user.api/fetchSPs");
      if (res.status === 200) {
        if (JSON.stringify(res.data) === JSON.stringify(oldSps)) {
          return;
        } else {
          dispatch(sPsFetchRefreshSuccess(res.data));
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 404) {
        dispatch(sPsFetchRefreshSuccess([]));
      }
      if (err.response) {
        console.log(err.response, err.message);
      } else if (err.request) {
        if (err.request.status) {
          console.error(err.message, err.request);
        } else {
          console.log(err.request, err.message);
        }
      } else {
        console.log(err.message);
      }
    }
  } else {
    try {
      dispatch(sPsFetchStart());
      const res = await myRequest.get("/user.api/fetchSPs");
      if (res.status === 200) {
        dispatch(sPsFetchSuccess(res.data));
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response, err.message);
        dispatch(sPsFetchFail(err.response.data));
      } else if (err.request) {
        if (err.request.status) {
          console.error(err.message, err.request);
          dispatch(sPsFetchFail(err.request.response));
        } else {
          console.log(err.request, err.message);
          dispatch(sPsFetchFail("Connection Failed Or Refused"));
        }
      } else {
        console.log(err.message);
        dispatch(sPsFetchFail(err.message));
      }
    }
  }
};

//Client Sign Up
export const cSignup = async (user, dispatch, navigate, enqueueSnackbar) => {
  try {
    dispatch(loginStart());
    const res = await myRequest.post("/user.api/signup", user);
    if (res.status === 200) {
      dispatch(
        loginSuccess({
          ...res.data,
          type: "client",
        })
      );
      navigate("/");
      enqueueSnackbar("User Account Created Successfully", {
        variant: "success",
      });
      enqueueSnackbar("Login Success", { variant: "success" });
    } else {
      dispatch(loginFail("An error occured"));
      enqueueSnackbar("Login Failed", { variant: "error" });
    }
  } catch (err) {
    enqueueSnackbar("Login Failed", { variant: "error" });
    enqueueSnackbar(err.response?.data.message, { variant: "error" });
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
      dispatch(loginFail(err.response.data));
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
        dispatch(loginFail(err.request.response));
      } else {
        console.log(err.request, err.message);
        dispatch(loginFail("Connection Failed Or Refused"));
      }
    } else {
      console.log(err.message);
      dispatch(loginFail(err.message));
    }
  }
};

//Client Login
export const cSignIn = async (
  user,
  type,
  dispatch,
  navigate,
  enqueueSnackbar
) => {
  //type => email || tel
  try {
    dispatch(loginStart());
    const res = await myRequest.post(`/user.api/login/${type}`, user);
    if (res.status === 200) {
      dispatch(
        loginSuccess({
          ...res.data,
          type: "client",
        })
      );
      navigate("/");
      enqueueSnackbar("Login Success", { variant: "success" });
    } else {
      dispatch(loginFail("An error occured"));
      enqueueSnackbar("Login Failed", { variant: "error" });
    }
  } catch (err) {
    enqueueSnackbar(err.response?.data, { variant: "error" });
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
      dispatch(loginFail(err.response.data));
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
        dispatch(loginFail(err.request.response));
      } else {
        console.log(err.request, err.message);
        dispatch(loginFail("Connection Failed Or Refused"));
      }
    } else {
      console.log(err.message);
      dispatch(loginFail(err.message));
    }
  }
};

//SP Sign Up
export const SPsignup = async (newSp, dispatch, navigate, enqueueSnackbar) => {
  try {
    dispatch(byPassloginStart());
    const res = await myRequest.post("/sp.api/signup", newSp);
    if (res.status === 200) {
      dispatch(
        loginSuccess({
          ...res.data,
          type: "sp",
        })
      );
      if (parseInt(res.data.approved, 10) === 1) {
        //Login
        navigate("/SPdash/home");
      } else {
        navigate("/SPdash/not_approved");
      }
      enqueueSnackbar("Service Provider Account Created Successfully", {
        variant: "success",
      });
      enqueueSnackbar("Login Success", { variant: "success" });
    } else {
      dispatch(loginFail("An error occured"));
      enqueueSnackbar("Login Failed", { variant: "error" });
    }
  } catch (err) {
    enqueueSnackbar(err.response?.data, { variant: "error" });
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
      dispatch(loginFail(err.response.data));
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
        dispatch(loginFail(err.request.response));
      } else {
        console.log(err.request, err.message);
        dispatch(loginFail("Connection Failed Or Refused"));
      }
    } else {
      console.log(err.message);
      dispatch(loginFail(err.message));
    }
  }
};

//SP login
export const SPsignin = async (sp, dispatch, navigate, enqueueSnackbar) => {
  try {
    dispatch(byPassloginStart());
    const res = await myRequest.post("/sp.api/login", sp);
    if (res.status === 200) {
      dispatch(
        loginSuccess({
          ...res.data,
          type: "sp",
        })
      );
      if (parseInt(res.data.approved, 10) === 1) {
        //Login
        navigate("/SPdash/home");
      } else {
        navigate("/SPdash/not_approved");
      }
      enqueueSnackbar("Login Success", { variant: "success" });
    } else {
      dispatch(loginFail("An error occured"));
      enqueueSnackbar("Login Failed", { variant: "error" });
    }
  } catch (err) {
    enqueueSnackbar(err.response?.data, { variant: "error" });
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
      dispatch(loginFail(err.response.data));
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
        dispatch(loginFail(err.request.response));
      } else {
        console.log(err.request, err.message);
        dispatch(loginFail("Connection Failed Or Refused"));
      }
    } else {
      console.log(err.message);
      dispatch(loginFail(err.message));
    }
  }
};

//SP login auth bypass
export const SPsigninBypass = async (spId, user, dispatch, navigate) => {
  try {
    dispatch(byPassloginStart());
    const res = await myRequest.post(`/sp.api/bypassSPfetch/${spId}`, {
      token: "SWQ324232LFP",
    });
    if (res.status === 200) {
      if (
        JSON.stringify({
          ...res.data,
          type: "sp",
        }) === JSON.stringify(user)
      ) {
      } else {
        dispatch(
          loginSuccess({
            ...res.data,
            type: "sp",
          })
        );
      }
      if (navigate) {
        if (parseInt(res.data.approved, 10) === 1) {
          //Login
          navigate("/SPdash/home");
        } else {
          navigate("/SPdash/not_approved");
        }
      }
    } else {
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};

//admin login
export const adminSignin = async (
  admin,
  dispatch,
  navigate,
  enqueueSnackbar
) => {
  try {
    dispatch(byPassloginStart());
    const res = await myRequest.post("/admin.api/login", admin);
    if (res.status === 200) {
      dispatch(
        loginSuccess({
          ...res.data,
          type: "admin",
        })
      );
      navigate("/admin/dash/home");
    } else {
      dispatch(loginFail("An error occured"));
      enqueueSnackbar("Login Failed", { variant: "error" });
    }
  } catch (err) {
    enqueueSnackbar(err.response?.data, { variant: "error" });
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
      dispatch(loginFail(err.response.data));
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
        dispatch(loginFail(err.request.response));
      } else {
        console.log(err.request, err.message);
        dispatch(loginFail("Connection Failed Or Refused"));
      }
    } else {
      console.log(err.message);
      dispatch(loginFail(err.message));
    }
  }
};

export const signOutUser = (dispatch, navigate) => {
  navigate("/");
  dispatch(userCleanup());
  dispatch(adminDataCleanup());
  dispatch(spDataCleanup());
};

export const fetchSPsAdmin = async (dispatch) => {
  try {
    const res = await myRequest.get("/admin.api/fetchSPs");
    if (res.status === 200) {
      dispatch(setSps(res.data));
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};
export const fetchUsersAdmin = async (dispatch) => {
  try {
    const res = await myRequest.get("/admin.api/fetchUsers");
    if (res.status === 200) {
      dispatch(setUsers(res.data));
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};

export const fetchServicesAdmin = async (dispatch) => {
  try {
    const res = await myRequest.get("/admin.api/getservices");
    if (res.status === 200) {
      dispatch(setServices(res.data));
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};

export const fetchSpProductsSP = async (SPid, dispatch) => {
  try {
    const res = await myRequest.get(`/sp.api/getPdts/${SPid}`);
    if (res.status === 200) {
      dispatch(setProducts(res.data));
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};

export const fetchSpCommentsSP = async (SPid, dispatch) => {
  try {
    const res = await myRequest.get(`/sp.api/fetchComments/${SPid}`);
    if (res.status === 200) {
      dispatch(setComments(res.data));
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};

export const fetchSPcallsSP = async (SPid, dispatch) => {
  try {
    const res = await myRequest.get(`/sp.api/userContactAtempts/${SPid}`);
    if (res.status === 200) {
      dispatch(setCallings(res.data));
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
      } else {
        console.log(err.request, err.message);
      }
    } else {
      console.log(err.message);
    }
  }
};
