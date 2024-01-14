import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./DownArrow.styles.scss";

export default function FilterInputDropdownArrowIcon({ callback }: IconsProps) {
  return <Icon icon={faChevronDown} handleClick={callback} />;
}
