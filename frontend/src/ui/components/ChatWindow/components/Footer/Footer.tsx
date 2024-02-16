import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SendChatIcon } from "src/ui/features/Icons";
import { useAddMessageMutation } from "src/redux/api/chat.api";
import "./Footer.styles.scss";

export default function ChatWindowFooter() {
  const { userId } = useParams();
  const [addMessage] = useAddMessageMutation();
  const [message, setMessage] = useState("");

  function handleSendMessage() {
    addMessage({ data: { message }, receiver: userId });
    setMessage("");
  }

  function handleOnChange(e: any) {
    setMessage(e.target.value);
  }

  return (
    <div className="chatFooter">
      <div className="chatFooterLeft">
        <textarea
          onChange={handleOnChange}
          className="input chat"
          name="chat"
          value={message}
          placeholder="Message..."
        />
      </div>
      <div className="chatFooterRight">
        <SendChatIcon callback={handleSendMessage} />
      </div>
    </div>
  );
}
