import React from "react";
import HeaderSidebarChatLayout from "../HeaderSidebarChat";
import { ChatsMenu } from "src/ui/features/Menus";
import { CHATS } from "src/testing/data/chat";

export default function ChatLayout() {
  return (
    <HeaderSidebarChatLayout>
      <ChatsMenu chats={CHATS} />
    </HeaderSidebarChatLayout>
  );
}
