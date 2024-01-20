import React from "react";
import { Wrapper } from "src/ui/components";
import { TypewriterTextEffect } from "src/ui/features/TextEffects";
import { TYPEWRITER_ANIMATION } from "src/ui/features/TextEffects/Typewriter/Typewriter.constants";
import "./ChatPlaceholder.styles.scss";

export default function ChatPlaceholder() {
  return (
    <Wrapper classNames="chatPlaceholder">
      <div className="droogMessage">
        <TypewriterTextEffect>
          <h2
            style={{
              animation: TYPEWRITER_ANIMATION.ANIMATION1,
              width: "100px",
            }}
          >
            Hello.
          </h2>
        </TypewriterTextEffect>
        <img
          alt="Droog AI"
          className="droogSvg"
          src="../../../assets/droogai.svg"
        />
        <TypewriterTextEffect>
          <h2
            style={{
              animation: TYPEWRITER_ANIMATION.ANIMATION2,
              width: "0",
            }}
          >
            I'm Droog AI.
          </h2>
        </TypewriterTextEffect>
      </div>
    </Wrapper>
  );
}
