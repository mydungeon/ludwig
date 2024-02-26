import React from "react";
import { SendChatIcon } from "src/ui/features/Icons";
import ChatInput from "../ChatInput";
import ChatWindowFooterProps from "./Footer.types";
import "./Footer.styles.scss";

export default function ChatWindowFooter({
  handleOnChange,
  handleSendMessage,
  message,
}: ChatWindowFooterProps) {
  return (
    <div className="chatFooter">
      <div className="chatFooterLeft">
        <ChatInput handleOnChange={handleOnChange} message={message} />
      </div>
      <div className="chatFooterRight">
        <SendChatIcon callback={handleSendMessage} />
      </div>
    </div>
  );
}
