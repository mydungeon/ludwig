import React from "react";
import ChatFooterPageProps from "./ChatFooter.types";
import { PageTitle } from "src/ui/components";
import { ChatFooter } from "src/ui/features/Footers";
import "./ChatFooter.styles.scss";

export default function ChatFooterPage({
  children,
  classNames,
  ...props
}: ChatFooterPageProps) {
  classNames = classNames ? `page ${classNames}` : "page";
  return (
    <div className="chatFooterPage">
      <div className={classNames} data-testid="page">
        <PageTitle {...props} />
        {children}
      </div>
      <ChatFooter />
    </div>
  );
}
