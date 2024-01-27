import React from "react";
import { Ellipse } from "src/ui/components";
import HistoryItemProps from "./HistoryItem.types";
import { ArchiveIcon, MoreIcon } from "src/ui/features/Icons";
import "./HistoryItem.styles.scss";

export default function HistoryItem({ title }: HistoryItemProps) {
  return (
    <li className="historyItem">
      <div>
        <div>
          <Ellipse text={title} length={25} />
        </div>
        <MoreIcon />
        <ArchiveIcon />
      </div>
    </li>
  );
}
