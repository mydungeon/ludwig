import React from "react";
import ChatSenderProps from "./ChatSender.types";
import { Avatar } from "src/ui/components";
import "./ChatSender.styles.scss";

export default function ChatSender({ isUser, userName }: ChatSenderProps) {
  const who = isUser ? "You" : "Droog AI";
  const className = isUser ? "who you" : "who droog";
  return (
    <div className="sender" data-testid="chatSender">
      {isUser && userName ? (
        <div>
          <Avatar classNames="chat" userName={userName} />
        </div>
      ) : (
        <img alt="Droog AI" src="assets/droogai.svg" width="40" />
      )}
      <div className={className}>{who}</div>
    </div>
  );
}
