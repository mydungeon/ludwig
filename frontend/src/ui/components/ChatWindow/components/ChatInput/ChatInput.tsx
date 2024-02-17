import React from "react";
import "./ChatInput.styles.scss";
import ChatInputProps from "./ChatInput.types";

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
