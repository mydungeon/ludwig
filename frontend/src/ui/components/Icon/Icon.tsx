import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconProps from "./Icon.types";
import "./Icon.styles.scss";

export default function Icon({
  classNames,
  icon,
  handleClick,
  size,
}: IconProps) {
  return (
    <FontAwesomeIcon
      className={classNames}
      icon={icon}
      onClick={handleClick}
      size={size}
    />
  );
}
