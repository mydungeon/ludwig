import React from "react";
import { ToastContainer } from "react-toastify";
// import useToggle from "src/hooks/useToggleValue";
import PreLoader from "src/ui/components/PreLoader";
import SiteRoutes from "src/routing/SiteRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  // const [value] = useToggle(false);
  return (
    <>
      <ToastContainer />
      <PreLoader show={false} />
      <SiteRoutes />
    </>
  );
}

export default App;
