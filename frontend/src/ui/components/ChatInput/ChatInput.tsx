import React from "react";
import ChatInputProps from "./ChatInput.types";
import "./ChatInput.styles.scss";

export default function ChatInput({ children }: ChatInputProps) {
  return (
    <div className="chatInput" data-testid="chatInput">
      <input className="input" placeholder="Message Droog AI..." type="text" />
    </div>
  );
}
