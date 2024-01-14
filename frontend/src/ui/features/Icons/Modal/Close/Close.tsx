import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Close.styles.scss";

export default function ModalCloseIcon({ callback }: IconsProps) {
  return <Icon icon={faXmark} handleClick={callback} size="2xl" />;
}
