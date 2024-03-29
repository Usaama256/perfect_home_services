import React from "react";
import PageRoutes from "./pages/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import "./store/styles/main.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { SnackbarProvider } from "notistack";
import ThemeProvider from "./store/theme";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider maxSnack={2}>
          <BrowserRouter>
            <ThemeProvider>
              <PageRoutes />
            </ThemeProvider>
          </BrowserRouter>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
