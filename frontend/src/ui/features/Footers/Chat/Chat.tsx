import React from "react";
import { FileUploadIcon } from "../../Icons";
import { ChatInput, Footer } from "src/ui/components";
import "./Chat.styles.scss";

export default function ChatFooter() {
  return (
    <Footer classNames="chat">
      <FileUploadIcon />
      <div>
        <ChatInput />
      </div>
      <div />
    </Footer>
  );
}
