import React from "react";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
// import useToggle from "src/hooks/useToggleValue";
import PreLoader from "src/ui/components/PreLoader";
=======
>>>>>>> 6e7f044 (massive amount of  boilerplate)
import SiteRoutes from "src/routing/SiteRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  // const [value] = useToggle(false);
  return (
    <>
      <ToastContainer />
<<<<<<< HEAD
      <PreLoader show={false} />
=======
>>>>>>> 6e7f044 (massive amount of  boilerplate)
      <SiteRoutes />
    </>
  );
}

export default App;
