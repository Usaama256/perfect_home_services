import { createSlice } from "@reduxjs/toolkit";

//App Data start
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    isFetching: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    appDataFetchStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    appDataFetchSuccess: (state, actions) => {
      state.data = actions.payload;
      state.isFetching = false;
      state.error = null;
    },
    appDataFetchFail: (state, actions) => {
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = actions.payload;
    },
    appDataFetchRefreshStart: (state) => {
      state.isRefreshing = true;
    },
    appDataFetchRefreshSuccess: (state, actions) => {
      state.data = actions.payload;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
    appDataCleanup: (state) => {
      state.data = null;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const {
  appDataFetchStart,
  appDataFetchSuccess,
  appDataFetchFail,
  appDataFetchRefreshStart,
  appDataFetchRefreshSuccess,
  appDataCleanup,
} = productsSlice.actions;

export const appDataRedux = productsSlice.reducer;
//App Data end

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
    },
    userCleanup: (state) => {
      state.user = null;
      state.isFetching = false;
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, userCleanup } =
  userSlice.actions;

export const userRedux = userSlice.reducer;
//App Data end

//cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: null,
    number: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, actions) => {
      state.items = actions.payload;
    },
    changeNumber: (state, actions) => {
      state.number = actions.payload;
    },
    changeTotal: (state, actions) => {
      state.total = actions.payload;
    },
    removeItem: (state, actions) => {
      state.items = actions.payload;
    },
    cartCleanUp: (state) => {
      state.items = null;
      state.number = 0;
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, changeNumber, changeTotal, cartCleanUp } =
  cartSlice.actions;

export const cartRedux = cartSlice.reducer;
//cart end
