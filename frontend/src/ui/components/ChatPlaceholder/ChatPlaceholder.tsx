import React from "react";
import "./ChatPlaceholder.styles.scss";
import { Wrapper } from "src/ui/components";

export default function ChatPlaceholder() {
  return (
    <Wrapper classNames="droogAi">
      <div className="droogMessage">
        <div className="typewriter1">
          <h2>Hello.</h2>
        </div>
        <img
          alt="Droog AI"
          className="droogSvg"
          src="../../../assets/droogai.svg"
        />
        <div className="typewriter2">
          <h2>I'm Droog AI.</h2>
        </div>
      </div>
    </Wrapper>
  );
}
