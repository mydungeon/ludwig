import React from "react";
import PreLoaderProps from "./PreLoader.types";
import Wrapper from "src/ui/components/Wrapper";
import Spinner from "./components/Spinner";
import Backdrop from "../Backdrop/Backdrop";

export default function PreLoader({ show }: PreLoaderProps) {
  return (
    <Backdrop show={show}>
      <Wrapper classNames="preloader">
        <Spinner />
      </Wrapper>
    </Backdrop>
  );
}
