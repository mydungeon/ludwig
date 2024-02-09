import React from "react";
import { Gpt } from "src/ui/components";
import { TypewriterTextEffect } from "src/ui/features/TextEffects";
import { TYPEWRITER_ANIMATION } from "src/ui/features/TextEffects/Typewriter/Typewriter.constants";
import "./Chat.styles.scss";
import { BOTTOM_LINE, TOP_LINE } from "./Chat.constants";

export default function DroogAiChatPlaceholder() {
  return (
    <>
      <Gpt.ChatPlaceholder>
        <div className="droogMessage">
          <TypewriterTextEffect>
            <h2
              style={{
                animation: TYPEWRITER_ANIMATION.ANIMATION1,
                width: "100px",
              }}
            >
              {TOP_LINE}
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
              {BOTTOM_LINE}
            </h2>
          </TypewriterTextEffect>
        </div>
      </Gpt.ChatPlaceholder>
      <Gpt.ChatPrompts />
    </>
  );
}
