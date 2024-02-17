import React from "react";
import useChat from "src/hooks/useChat";
import { SendChatIcon } from "src/ui/features/Icons";
import "./Footer.styles.scss";
import ChatInput from "../ChatInput";

export default function ChatWindowFooter() {
  const { handleOnChange, handleSendMessage, message } = useChat();
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
