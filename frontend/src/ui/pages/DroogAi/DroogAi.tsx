import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { droogAiAscii } from "src/utils/ascii";
import { ChatFooterPage } from "src/ui/features/Pages";
import { useAppSelector } from "src/redux/store";
import DroogAiChatPlaceholder from "src/ui/features/Placeholders";
import { Gpt } from "src/ui/components";
import "./DroogAi.styles.scss";

export default function DroogAiPage() {
  const messages = useSelector((state: any) => {
    const { gptState } = state;
    return gptState.messages;
  });
  const user = useAppSelector((state) => state.profileState.profile);

  useEffect(() => {
    droogAiAscii(`Oh my little droogie...`);
  }, []);

  return (
    <>
      {messages.length === 0 ? (
        <ChatFooterPage classNames="noMessages">
          <DroogAiChatPlaceholder />
        </ChatFooterPage>
      ) : (
        <ChatFooterPage classNames="droogAi">
          <Gpt.ChatMessages messages={messages} userName={user?.name} />
        </ChatFooterPage>
      )}
    </>
  );
}
