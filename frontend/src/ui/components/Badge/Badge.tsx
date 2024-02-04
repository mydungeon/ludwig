import React from "react";
import BadgeProps from "./Badge.types";
import "./Badge.styles.scss";

export default function Badge({ classNames, text }: BadgeProps) {
  let className = "badge";
  className = classNames ? `${className} ${classNames}` : className;
  return (
    <div className={className} data-testid="badge">
      {text}
    </div>
  );
}
