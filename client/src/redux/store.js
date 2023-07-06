import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  userRedux,
  servicesRedux,
  sPsRedux,
  adminDataRedux,
  spDataRedux,
} from "./ReduxSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userRedux,
  services: servicesRedux,
  sPs: sPsRedux,
  adminData: adminDataRedux,
  spData: spDataRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE, REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
