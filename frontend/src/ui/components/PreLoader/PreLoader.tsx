import React, { useContext } from "react";
import { AppContextType, AppContext } from "src/context/App";
import { Wrapper } from "src/ui/components";
import { Backdrop } from "src/ui/components";
import Spinner from "./components/Spinner";

export default function PreLoader() {
  const { showPreloader } = useContext<AppContextType>(AppContext);
  return (
    <Backdrop show={showPreloader}>
      <Wrapper classNames="preloader">
        <Spinner />
      </Wrapper>
    </Backdrop>
  );
}
