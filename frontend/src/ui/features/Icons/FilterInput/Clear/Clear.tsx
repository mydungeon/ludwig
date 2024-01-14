import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Clear.styles.scss";

export default function FilterInputClearIcon({ callback }: IconsProps) {
  return (
    <Icon
      classNames="clearFilter"
      icon={faClose}
      handleClick={callback}
      size="xs"
    />
  );
}
