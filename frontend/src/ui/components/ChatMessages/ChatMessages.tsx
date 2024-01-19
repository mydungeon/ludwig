import React from "react";
import ChatMessagesProps from "./ChatMessages.types";
import { ChatMessage } from "src/ui/components";
import ChatSender from "src/ui/components/ChatSender";
import "./ChatMessages.styles.scss";

export default function ChatMessages({
  messages,
  userName,
}: ChatMessagesProps) {
  return (
    <div className="chatMessages" data-testid="chatMessages">
      {messages.map(({ content, role }, index) => (
        <ChatMessage key={index} message={content}>
          <ChatSender isUser={role === "user"} userName={userName} />
        </ChatMessage>
      ))}
    </div>
  );
}
