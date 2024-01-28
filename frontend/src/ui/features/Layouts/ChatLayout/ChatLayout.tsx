import React from "react";
import HeaderSidebarChatLayout from "../HeaderSidebarChat";
import { ChatMenu } from "src/ui/features/Menus";

export default function ChatLayout() {
  return (
    <HeaderSidebarChatLayout>
      <ChatMenu />
    </HeaderSidebarChatLayout>
  );
}
