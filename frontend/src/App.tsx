import React from "react";
import { ToastContainer } from "react-toastify";
import SiteRoutes from "src/routing/SiteRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <>
      <ToastContainer />
      <SiteRoutes />
    </>
  );
}

export default App;
