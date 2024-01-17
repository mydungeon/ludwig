import React from "react";
import ChatProps from "./ChatMessage.types";
import "./ChatMessage.styles.scss";

export default function ChatMessage({ children, message }: ChatProps) {
  return (
    <div className="chat" data-testid="chat">
      {children}
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
}
