import React from "react";
import ChatMessagesProps from "./ChatMessages.types";
import { Gpt } from "src/ui/components";
import "./ChatMessages.styles.scss";

export default function ChatMessages({
  messages,
  userName,
}: ChatMessagesProps) {
  return (
    <div className="chatMessages" data-testid="chatMessages">
      {messages.map(({ content, role }, index) => (
        <Gpt.ChatMessage key={index} message={content}>
          <Gpt.ChatSender isUser={role === "user"} userName={userName} />
        </Gpt.ChatMessage>
      ))}
    </div>
  );
}
