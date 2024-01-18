import React from "react";
import { ChatInput, Footer } from "src/ui/components";
import "./Chat.styles.scss";

export default function ChatFooter() {
  return (
    <Footer classNames="chat">
      <ChatInput />
    </Footer>
  );
}
