import React from "react";
import ChatInputProps from "./ChatInput.types";
import "./ChatInput.styles.scss";

export default function ChatInput({ handleOnChange, message }: ChatInputProps) {
  return (
    <textarea
      onChange={handleOnChange}
      className="input chat"
      name="chat"
      value={message}
      placeholder="Message..."
    />
  );
}
