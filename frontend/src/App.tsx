import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
// import useToggle from "src/hooks/useToggleValue";
import { AppContext } from "./context/App";
import PreLoader from "src/ui/components/PreLoader";
import SiteRoutes from "src/routing/SiteRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  const [context, setContext] = useState(false);

  function handleSetContext(isLoading: boolean) {
    setContext(isLoading);
  }

  return (
    <AppContext.Provider value={{ context, handleSetContext }}>
      <ToastContainer />
      <PreLoader show={context} />
      <SiteRoutes />
    </AppContext.Provider>
  );
}

export default App;
