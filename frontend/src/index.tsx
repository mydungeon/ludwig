import React from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
