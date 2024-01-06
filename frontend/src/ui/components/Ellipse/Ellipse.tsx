import React from "react";
import EllipseProps from "./Ellipse.types";
import "./Ellipse.styles.scss";

export default function Ellipse({ length = 10, text }: EllipseProps) {
  if (typeof text !== "string" || text.length < length) return <>{text}</>;
  const subStr = text.substring(0, length);
  return (
    <div className="ellipse">
      <div className="ellipsed" data-testid="ellipse">
        <span>{`${subStr}...`}</span>
      </div>
    </div>
  );
}
