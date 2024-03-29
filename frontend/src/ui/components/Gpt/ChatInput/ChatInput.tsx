import React, { useRef } from "react";
import { TEXT_AREA } from "./ChatInput.types";
import { useChatInput } from "src/hooks";
import { useTextAreaAutoSize } from "src/hooks";
import { SendIcon } from "src/ui/features/Icons";
import "./ChatInput.styles.scss";

export default function ChatInput() {
  const { handleChange, handleKeyDown, handleSubmit, value } = useChatInput();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useTextAreaAutoSize(textAreaRef.current, value);
  return (
    <div className="chatInput" data-testid="chatInput">
      <textarea
        className={TEXT_AREA.CLASSNAME}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={TEXT_AREA.PLACEHODER}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      <SendIcon callback={handleSubmit} />
    </div>
  );
}
