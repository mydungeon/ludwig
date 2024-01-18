import React from "react";
import "./DroogAi.styles.scss";
import { ChatFooterPage } from "src/ui/features/Pages";
import { chatMessages } from "src/testing/data/chats/chatMessages";
import { ChatMessage } from "src/ui/components";
import ChatSender from "src/ui/components/ChatSender";
import { useAppSelector } from "src/redux/store";

export default function DroogAiPage() {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <ChatFooterPage classNames="droogAi">
      <div className="chatMessages">
        {chatMessages.map(({ content, role }, index) => (
          <ChatMessage key={index} message={content}>
            <ChatSender isUser={role === "user"} userName={user?.name} />
          </ChatMessage>
        ))}
      </div>
    </ChatFooterPage>
  );
}
