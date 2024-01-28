import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { droogAiAscii } from "src/utils/ascii";
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

  useEffect(() => {
    droogAiAscii(`Oh my little droogie...`);
  }, []);

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
