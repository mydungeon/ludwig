import React, { useCallback, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
// import useToggle from "src/hooks/useToggleValue";
import { AppContext } from "./context/App";
import PreLoader from "src/ui/components/PreLoader";
import SiteRoutes from "src/routing/SiteRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  const [context, setContext] = useState(false);

  const handleSetContext = useCallback((isLoading: boolean) => {
    setContext(isLoading);
  }, []);

  const contextValue = useMemo(
    () => ({
      context,
      handleSetContext,
    }),
    [context, handleSetContext]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <ToastContainer />
      <PreLoader show={context} />
      <SiteRoutes />
    </AppContext.Provider>
  );
}

export default App;
