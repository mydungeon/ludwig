import React from "react";
import ChatPromptProps from "./ChatPrompt.types";
import "./ChatPrompt.styles.scss";

export default function ChatPrompt({ prompt }: ChatPromptProps) {
  return (
    <div className="prompt">
      <div>{prompt}</div>
    </div>
  );
}
