import React from "react";
import PreLoaderProps from "./PreLoader.types";
import { Wrapper } from "src/ui/components";
import { Backdrop } from "src/ui/components";
import Spinner from "./components/Spinner";

export default function PreLoader({ show }: PreLoaderProps) {
  return (
    <Backdrop show={show}>
      <Wrapper classNames="preloader">
        <Spinner />
      </Wrapper>
    </Backdrop>
  );
}
