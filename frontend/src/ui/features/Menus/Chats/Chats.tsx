import React from "react";
import ChatsProps from "./Chats.types";
import { Ellipse, Icon } from "src/ui/components";
import "./Chats.styles.scss";
import { faEllipsis, faInbox } from "@fortawesome/free-solid-svg-icons";
import { ArchiveIcon, MoreIcon } from "../../Icons";

export default function ChatsMenu({ chats }: ChatsProps) {
  return (
    <div className="chatsMenu" data-testid="chatsMenu">
      <h3>Previous Chats</h3>
      <ul>
        {chats.map((chat, index) => (
          <li key={index}>
            <div>
              <div>
                <Ellipse text={chat} length={25} />
              </div>
              <MoreIcon />
              <ArchiveIcon />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
