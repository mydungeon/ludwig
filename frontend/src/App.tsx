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
  const [showPreloader, setShowPreloader] = useState(false);
  const [showSiteMenu, setShowSiteMenu] = useState(false);

  const handleShowPreloader = useCallback((isLoading: boolean) => {
    setShowPreloader(isLoading);
  }, []);

  const handleShowSiteMenu = useCallback((show: boolean) => {
    setShowSiteMenu(show);
  }, []);

  const contextValue = useMemo(
    () => ({
      showPreloader,
      showSiteMenu,
      handleShowPreloader,
      handleShowSiteMenu,
    }),
    [showPreloader, showSiteMenu, handleShowPreloader, handleShowSiteMenu]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <AlertModal message="Test message" title="Test title" />
      <ToastContainer />
      <PreLoader show={showPreloader} />
      <AuthMiddleware>
        <SiteRoutes />
      </AuthMiddleware>
    </AppContext.Provider>
  );
}

export default App;
library.add(fas);
