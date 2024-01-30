import React from "react";
import { ChatPrompt } from "src/ui/components";
import { PROMPTS } from "./ChatPrompts.constants";
import "./ChatPrompts.styles.scss";

export default function ChatPrompts() {
  return (
    <div className="prompts">
      {PROMPTS.map((column, i) => (
        <div key={i}>
          {column.map((prompt, ii) => (
            <ChatPrompt key={`${i}-${ii}`} prompt={prompt} />
          ))}
        </div>
      ))}
    </div>
  );
}
