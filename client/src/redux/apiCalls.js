import axios from "axios";
import { myRequest } from "../store/requestMethods";
import {
  appDataFetchStart,
  appDataFetchSuccess,
  appDataFetchFail,
  addItem,
  removeItem,
  changeNumber,
  changeTotal,
  loginStart,
  loginSuccess,
  loginFail,
  userCleanup,
} from "./ReduxSlices";

// axios.defaults.withCredentials = true;

//Fetching all products
export const fetchAllPdts = async (dispatch) => {
  try {
    dispatch(appDataFetchStart());
    const res = await myRequest.get("/products/getproducts");
    dispatch(appDataFetchSuccess(res.data));
  } catch (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response, err.message);
      dispatch(appDataFetchFail(err.response.data));
    } else if (err.request) {
      if (err.request.status) {
        console.error(err.message, err.request);
        dispatch(appDataFetchFail(err.request.response));
      } else {
        console.log(err.request, err.message);
        dispatch(appDataFetchFail("Connection Failed Or Refused"));
      }
    } else {
      console.log(err.message);
      dispatch(appDataFetchFail(err.message));
    }
  }
};

export const addItemToCart = (cart, item, dispatch) => {
  var replace = false;
  // console.log(cart, item);

  const allCart = cart?.map((i) => {
    if (i.prod_id === item.prod_id) {
      replace = true;
      return item;
    } else {
      return i;
    }
  });
  if (replace) {
    dispatch(addItem(allCart));
    dispatch(changeNumber(allCart.length));
    dispatch(changeTotal(getTotal(allCart)));
  } else {
    if (cart) {
      const arrr = [...cart, item];
      dispatch(addItem(arrr));
      dispatch(changeNumber(arrr.length));
      dispatch(changeTotal(getTotal(arrr)));
    } else {
      dispatch(addItem([item]));
      dispatch(changeNumber(1));
      dispatch(changeTotal(getTotal([item])));
    }
  }
};

export const removeItemFromCart = (cart, id, dispatch) => {
  const filtered = cart?.filter((item) => item.prod_id !== id);
  //console.log(filtered);
  dispatch(removeItem(filtered));
  dispatch(changeNumber(filtered?.length));
  dispatch(changeTotal(getTotal(filtered)));
};

export const signupUser = async (user, dispatch, navigate, enqueueSnackbar) => {
  try {
    dispatch(loginStart());
    const res = await myRequest.post("/users/signup", user);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
      navigate("/");
      enqueueSnackbar("Account Created Successfully", { variant: "success" });
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

export const signInUser = async (user, dispatch, navigate, enqueueSnackbar) => {
  try {
    dispatch(loginStart());
    const res = await myRequest.post("/users/login", user);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
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

export const signOutUser = (dispatch) => {
  dispatch(userCleanup());
};

const getTotal = (arr) => {
  var total = 0;
  arr?.map((i) => {
    total += i.total_price;
    return 0;
  });
  return total;
};
// //Fetching App Data
// export const appDataFetch = (dispatch) => {
//   dispatch(appDataFetchStart());
//   axios
//     .all([
//       //myRequest.get("/admin/kawucards"),
//       //myRequest.get("/allsch"),
//       //myRequest.get("/allagents"),
//       //myRequest.get("/admin/allparents"),
//       //myRequest.get("/admin/alltransactions"),
//       //myRequest.get("/admin/allstudents"),
//       //myRequest.get("/admin/comm/get/systemrecip"),
//     ])
//     .then(
//       axios.spread((...responses) => {
//         const appData = {
//           kawuCards: responses[0].data,
//           schools: responses[1].data,
//           agents: responses[2].data,
//           parents: responses[3].data,
//           transactions: responses[4].data,
//           students: responses[5].data,
//           sysCommRec: responses[6].data,
//         };
//         dispatch(appDataFetchSuccess(appData));
//       })
//     )
//     .catch((error) => {
//       if (error.response) {
//         console.log(error.response, error.message);
//         dispatch(appDataFetchFail(error.response.data));
//       } else if (error.request) {
//         if (error.request.status) {
//           console.error(error.message, error.request);
//           dispatch(appDataFetchFail(error.request.response));
//         } else {
//           console.log(error.request, error.message);
//           dispatch(appDataFetchFail("Connection Failed Or Refused"));
//         }
//       } else {
//         console.log(error.message);
//         dispatch(appDataFetchFail(error.message));
//       }
//     });
// };

// //Refreshing App Data
// export const appDataRefreshHandler = (dispatch) => {
//   dispatch(appDataFetchRefreshStart());
//   axios
//     .all([
//       // myRequest.get("/admin/kawucards"),
//       // myRequest.get("/allsch"),
//       // myRequest.get("/allagents"),
//       // myRequest.get("/admin/allparents"),
//       // myRequest.get("/admin/alltransactions"),
//       // myRequest.get("/admin/allstudents"),
//       // myRequest.get("/admin/comm/get/systemrecip"),
//     ])
//     .then(
//       axios.spread((...responses) => {
//         const appData = {
//           kawuCards: responses[0].data,
//           schools: responses[1].data,
//           agents: responses[2].data,
//           parents: responses[3].data,
//           transactions: responses[4].data,
//           students: responses[5].data,
//           sysCommRec: responses[6].data,
//         };
//         dispatch(appDataFetchRefreshSuccess(appData));
//       })
//     )
//     .catch((error) => {
//       if (error.response) {
//         console.log("Refresh Error: ", error.response, error.message);
//         dispatch(appDataFetchFail(`Refresh Error: ${error.response.data}`));
//       } else if (error.request) {
//         if (error.request.status) {
//           console.log("Refresh Error: ", error.request, error.message);
//           dispatch(
//             appDataFetchFail(`Refresh Error: ${error.request.response}`)
//           );
//         } else {
//           console.log("Refresh Error: ", error.request, error.message);
//           dispatch(appDataFetchFail(`Refresh Error: ${error.message}`));
//         }
//       } else {
//         console.log("Refresh Error: ", error.message);
//         dispatch(appDataFetchFail(`Refresh Error: ${error.message}`));
//       }
//     });
// };
