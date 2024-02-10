import React from "react";
import ChatMessagesProps from "./ChatMessages.types";
import "./ChatMessages.styles.scss";

export default function ChatMessages({ children }: ChatMessagesProps) {
  return (
    <div className="chatMessages" data-testid="chatMessages">
      <div className="chatMessage sender">
        My Message My Message My Message My Message My Message My Message My
        Message My Message
      </div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">My Message</div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">My Message</div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">My Message</div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">
        My Message My Message My Message My Message My Message My Message My
        Message My Message
      </div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">My Message</div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">My Message</div>
      <div className="chatMessage recipient">Their Message</div>
      <div className="chatMessage sender">My Message</div>
      <div className="chatMessage recipient">Their Message</div>
    </div>
  );
}
