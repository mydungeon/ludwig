import React from "react";
import TypewriterTextEffectProps from "./Typewriter.types";
import "./Typewriter.styles.scss";

export default function TypewriterTextEffect({
  children,
}: TypewriterTextEffectProps) {
  return (
    <div className="typewriter" data-testid="texteffects">
      {children}
    </div>
  );
}
