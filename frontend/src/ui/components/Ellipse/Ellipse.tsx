import React, { useState } from "react";
import EllipseProps from "./Ellipse.types";
import "./Ellipse.styles.scss";

export default function Ellipse({ length = 10, text }: EllipseProps) {
  const [isMousedOver, setIsMousedOver] = useState(false);
  if (typeof text !== "string" || text.length < length) return <>{text}</>;
  const subStr = text.substring(0, length);
  return (
    <div className="ellipse">
      {isMousedOver && <div className="tooltip">{text}</div>}
      <div
        className="ellipsed"
        data-testid="ellipse"
        onMouseOver={() => setIsMousedOver(true)}
        onMouseLeave={() => setIsMousedOver(false)}
      >
        <span>{`${subStr}...`}</span>
      </div>
    </div>
  );
}
