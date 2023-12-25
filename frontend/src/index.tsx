import React from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import SiteRouter from "./routing/SiteRouter";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "src/sass/index.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SiteRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </SiteRouter>
    </Provider>
  </React.StrictMode>
);
