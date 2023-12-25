import React, { useCallback, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "./context/App";
import AlertModal from "src/ui/features/Modals/Alert";
import PreLoader from "src/ui/components/PreLoader";
import AuthMiddleware from "src/middleWare/AuthMiddleware";
import SiteRoutes from "src/routing/SiteRoutes";

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
      <AlertModal message="Test message" title="Test title" />
      <ToastContainer />
      <PreLoader show={context} />
      <AuthMiddleware>
        <SiteRoutes />
      </AuthMiddleware>
    </AppContext.Provider>
  );
}

export default App;
library.add(fas);
