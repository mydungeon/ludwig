import React from "react";
import ChatSenderProps from "./ChatSender.types";
import "./ChatSender.styles.scss";

export default function ChatSender({ isUser }: ChatSenderProps) {
  const who = isUser ? "You" : "Droog";
  const className = isUser ? "who you" : "who droog";
  return (
    <div className="sender" data-testid="chatSender">
      <div className={className}>{who}</div>
    </div>
  );
}
