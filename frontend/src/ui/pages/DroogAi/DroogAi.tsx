import React from "react";
import "./DroogAi.styles.scss";
import { ChatFooterPage } from "src/ui/features/Pages";
import { chatMessages } from "src/testing/data/chats/chatMessages";
import { ChatMessage } from "src/ui/components";
import ChatSender from "src/ui/components/ChatSender";

export default function DroogAiPage() {
  return (
    <ChatFooterPage classNames="droogAi" pageTitle="Hello, I'm Droog AI">
      <div className="chatMessages">
        {chatMessages.map(({ content, role }, index) => (
          <ChatMessage key={index} message={content}>
            <ChatSender isUser={role === "user"} />
          </ChatMessage>
        ))}
      </div>
    </ChatFooterPage>
  );
}
