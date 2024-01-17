import React from "react";
import { ChatInput, Footer } from "src/ui/components";
import { DroogAiLogo } from "src/ui/features/Logos";
import "./Chat.styles.scss";

export default function ChatFooter() {
  return (
    <Footer classNames="chat">
      <DroogAiLogo classNames="small" />
      <ChatInput />
    </Footer>
  );
}
