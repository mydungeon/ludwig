import React from "react";
import SpacerProps from "./Spacer.types";
import "./Spacer.styles.scss";

export default function Spacer({ classNames }: SpacerProps) {
  const className = classNames ? `spacer ${classNames}` : "spacer";
  return <div className={className} data-testid="spacer" />;
}
