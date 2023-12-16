import React from "react";
import UnauthorizedPageProps from "./Unauthorized.types";
import "./Unauthorized.styles.scss";

export default function UnauthorizedPage({ children }: UnauthorizedPageProps) {
  return (
    <div className="unauthorized" data-testid="unauthorizedPage">
      {children}
    </div>
  );
}
