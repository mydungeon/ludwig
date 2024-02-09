import React, { useState } from "react";
import classnames from "classnames";
import ChatWindowProps from "./ChatWindow.types";
import Icon from "src/ui/components/Icon";
import {
  faCircleChevronDown,
  faCircleChevronUp,
  faCircleMinus,
  faCircleXmark,
  faMessage,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import "./ChatWindow.styles.scss";

export default function ChatWindow({ children }: ChatWindowProps) {
  const [closeChat, setCloseChat] = useState(false);
  const [minChat, setMinChat] = useState(true);
  const [maxChat, setMaxChat] = useState(false);

  return !minChat ? (
    <div
      className={classnames("chatWindow open", {
        max: maxChat,
        close: closeChat,
      })}
      data-testid="chatWindow"
    >
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <div>
            <Icon
              classNames="closeChat"
              handleClick={() => setCloseChat(true)}
              icon={faCircleXmark}
              size="xl"
            />
          </div>
          <div>
            <Icon
              classNames="minChat"
              handleClick={() => setMinChat(true)}
              icon={faCircleMinus}
              size="xl"
            />
          </div>
          <div>
            {maxChat ? (
              <Icon
                classNames="maxChat"
                handleClick={() => setMaxChat(false)}
                icon={faCircleChevronDown}
                size="xl"
              />
            ) : (
              <Icon
                classNames="maxChat"
                handleClick={() => setMaxChat(true)}
                icon={faCircleChevronUp}
                size="xl"
              />
            )}
          </div>
        </div>
        <div className="chatHeaderRight">Jonny Dungeons</div>
      </div>
      <div className="chatBody">Body</div>
      <div className="chatFooter">
        <div className="chatFooterLeft">
          <textarea
            className="input chat"
            name="chat"
            placeholder="Message..."
          />
        </div>
        <div className="chatFooterRight">
          <Icon icon={faReply} size="xl" />
        </div>
      </div>
    </div>
  ) : (
    <div className="chatWindow min">
      <div className="chatFooter">
        <div className="chatFooterRight">
          <Icon
            icon={faMessage}
            handleClick={() => setMinChat(false)}
            size="xl"
          />
        </div>
      </div>
    </div>
  );
}
