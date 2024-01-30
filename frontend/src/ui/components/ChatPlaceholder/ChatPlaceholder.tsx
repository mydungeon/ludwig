import React from "react";
import { Wrapper } from "src/ui/components";
import ChatPlaceholderProps from "./ChatPlaceholder.types";
import "./ChatPlaceholder.styles.scss";

export default function ChatPlaceholder({ children }: ChatPlaceholderProps) {
  return <Wrapper classNames="chatPlaceholder">{children}</Wrapper>;
}
