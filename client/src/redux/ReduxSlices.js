import { createSlice } from "@reduxjs/toolkit";

//Services Slice
const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: null,
    isFetching: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    servicesFetchStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    servicesFetchSuccess: (state, actions) => {
      state.services = actions.payload;
      state.isFetching = false;
      state.error = null;
    },
    servicesFetchFail: (state, actions) => {
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = actions.payload;
    },
    servicesFetchRefreshStart: (state) => {
      state.isRefreshing = true;
    },
    servicesFetchRefreshSuccess: (state, actions) => {
      state.services = actions.payload;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
    servicesCleanup: (state) => {
      state.services = null;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const {
  servicesFetchStart,
  servicesFetchSuccess,
  servicesFetchFail,
  servicesFetchRefreshStart,
  servicesFetchRefreshSuccess,
  servicesCleanup,
} = servicesSlice.actions;

export const servicesRedux = servicesSlice.reducer;
//Services Slice end

//SPs Slice
const sPs = createSlice({
  name: "sPs",
  initialState: {
    sPs: null,
    isFetching: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    sPsFetchStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    sPsFetchSuccess: (state, actions) => {
      state.sPs = actions.payload;
      state.isFetching = false;
      state.error = null;
    },
    sPsFetchFail: (state, actions) => {
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = actions.payload;
    },
    sPsFetchRefreshStart: (state) => {
      state.isRefreshing = true;
    },
    sPsFetchRefreshSuccess: (state, actions) => {
      state.sPs = actions.payload;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
    sPsCleanup: (state) => {
      state.sPs = null;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const {
  sPsFetchStart,
  sPsFetchSuccess,
  sPsFetchFail,
  sPsFetchRefreshStart,
  sPsFetchRefreshSuccess,
  sPsCleanup,
} = sPs.actions;

export const sPsRedux = sPs.reducer;
//SPs Slice end

//User slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.user = null;
      state.error = null;
    },
    byPassloginStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, actions) => {
      state.user = actions.payload;
      state.isFetching = false;
      state.error = null;
    },
    loginFail: (state, actions) => {
      state.isFetching = false;
      state.error = actions.payload;
      state.user = null;
    },
    userCleanup: (state) => {
      state.user = null;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  byPassloginStart,
  userCleanup,
} = userSlice.actions;

export const userRedux = userSlice.reducer;
//User Slice end

//Admin data slice
const adminDataSlice = createSlice({
  name: "adminData",
  initialState: {
    services: null,
    users: null,
    sps: null,
  },
  reducers: {
    setServices: (state, actions) => {
      state.services = actions.payload;
    },
    setUsers: (state, actions) => {
      state.users = actions.payload;
    },
    setSps: (state, actions) => {
      state.sps = actions.payload;
    },
    adminDataCleanup: (state) => {
      state.services = null;
      state.users = null;
      state.sps = null;
    },
  },
});
export const { setServices, setUsers, setSps, adminDataCleanup } =
  adminDataSlice.actions;

export const adminDataRedux = adminDataSlice.reducer;
//Admin Data End

//Sp data slice
const spDataSlice = createSlice({
  name: "spData",
  initialState: {
    products: null,
    comments: null,
    callings: null,
  },
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    setComments: (state, actions) => {
      state.comments = actions.payload;
    },
    setCallings: (state, actions) => {
      state.callings = actions.payload;
    },
    spDataCleanup: (state) => {
      state.products = null;
      state.comments = null;
      state.callings = null;
    },
  },
});
export const { setProducts, setComments, setCallings, spDataCleanup } =
  spDataSlice.actions;

export const spDataRedux = spDataSlice.reducer;
