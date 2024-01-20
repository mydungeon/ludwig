import React, { useState } from "react";
import { ChatFooterPage } from "src/ui/features/Pages";
import { useAppSelector } from "src/redux/store";
import { ChatMessages, ChatPlaceholder } from "src/ui/components";
import { MESSAGES } from "src/testing/data/chat";
import "./DroogAi.styles.scss";

export default function DroogAiPage() {
  const [messages, setMessages] = useState([]);
  const user = useAppSelector((state) => state.userState.user);

  return (
    <>
      {messages.length === 0 ? (
        <ChatFooterPage classNames="noMessages">
          <ChatPlaceholder />
        </ChatFooterPage>
      ) : (
        <ChatFooterPage classNames="droogAi">
          <ChatMessages messages={messages} userName={user?.name} />
        </ChatFooterPage>
      )}
    </>
  );
}
