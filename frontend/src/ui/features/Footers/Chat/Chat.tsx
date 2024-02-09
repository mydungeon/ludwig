import React from "react";
import { Gpt, Footer } from "src/ui/components";
import "./Chat.styles.scss";

export default function ChatFooter() {
  return (
    <Footer classNames="chat">
      <div />
      <div>
        <Gpt.ChatInput />
      </div>
      <div />
    </Footer>
  );
}
