import React from "react";
import "./DroogAi.styles.scss";
import { ChatFooterPage } from "src/ui/features/Pages";
import { useAppSelector } from "src/redux/store";
import { ChatMessages } from "src/ui/components";
import { MESSAGES } from "src/testing/data/chat";

export default function DroogAiPage() {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <ChatFooterPage classNames="droogAi">
      <ChatMessages messages={MESSAGES} userName={user?.name} />
    </ChatFooterPage>
  );
}
