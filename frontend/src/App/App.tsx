import React, { useCallback, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "src/context/App";
import AlertModal from "src/ui/features/Modals/Alert";
import { PreLoader } from "src/ui/components";
import AuthMiddleware from "src/middleWare/AuthMiddleware";
import SiteRoutes from "src/routing/SiteRoutes";
import UseAlert from "src/hooks/useAlert";

function App() {
  const { alertIcon, alertMessage, alertTitle, showAlert } = UseAlert();
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
      <AlertModal
        alertIcon={alertIcon}
        alertMessage={alertMessage}
        alertTitle={alertTitle}
        showAlert={showAlert}
        size="xl"
      />
      <ToastContainer />
      <PreLoader />
      <AuthMiddleware>
        <SiteRoutes />
      </AuthMiddleware>
    </AppContext.Provider>
  );
}

export default App;
library.add(fas);
