import React, { useRef, useState } from "react";
import { useCreateCompletionsMutation } from "src/redux/api/gpt.api";
import ChatInputProps from "./ChatInput.types";
import useTextAreaAutoSize from "src/hooks/useTextAreaAutoSize";
import "./ChatInput.styles.scss";
import { SendIcon } from "src/ui/features/Icons";

export default function ChatInput({ children }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useTextAreaAutoSize(textAreaRef.current, value);
  const [createCompletions, { isSuccess }] = useCreateCompletionsMutation();
  function handleChange(e: any) {
    setValue(e.target.value);
  }
  function handleSubmit() {
    createCompletions({ content: value });
  }

  return (
    <div className="chatInput" data-testid="chatInput">
      <textarea
        className="input"
        onChange={handleChange}
        placeholder="Message Droog AI..."
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      <SendIcon callback={handleSubmit} />
    </div>
  );
}
