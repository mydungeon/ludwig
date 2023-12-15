import React from "react";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
<<<<<<< HEAD
// import useToggle from "src/hooks/useToggleValue";
import PreLoader from "src/ui/components/PreLoader";
=======
>>>>>>> 6e7f044 (massive amount of  boilerplate)
=======
// import useToggle from "src/hooks/useToggleValue";
import PreLoader from "src/ui/components/PreLoader";
>>>>>>> 8e50453 (style inputs, add preloader in progress)
import SiteRoutes from "src/routing/SiteRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  // const [value] = useToggle(false);
  return (
    <>
      <ToastContainer />
<<<<<<< HEAD
<<<<<<< HEAD
      <PreLoader show={false} />
=======
>>>>>>> 6e7f044 (massive amount of  boilerplate)
=======
      <PreLoader show={false} />
>>>>>>> 8e50453 (style inputs, add preloader in progress)
      <SiteRoutes />
    </>
  );
}

export default App;
