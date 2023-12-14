import React from "react";
import PageProps from "./Page.types";
import "./Page.styles.scss";

export default function Page({ children, classNames }: PageProps) {
  return (
    <div className={`page ${classNames}`} data-testid="page">
      {children}
    </div>
  );
}
