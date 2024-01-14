import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";

export default function SiteMenuCloseIcon({ callback }: IconsProps) {
  return <Icon icon={faXmark} handleClick={callback} size="2xl" />;
}
