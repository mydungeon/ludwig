import React from "react";
import { useSelector } from "react-redux";
import { ChatFooterPage } from "src/ui/features/Pages";
import { useAppSelector } from "src/redux/store";
import { ChatMessages, ChatPlaceholder } from "src/ui/components";
import "./DroogAi.styles.scss";
export default function DroogAiPage() {
  const messages = useSelector((state: any) => {
    const { gptState } = state;
    return gptState.messages;
  });
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
