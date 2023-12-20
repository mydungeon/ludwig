import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconProps from "./Icon.types";

export default function Icon({ icon, handleClick, size }: IconProps) {
  return <FontAwesomeIcon icon={icon} onClick={handleClick} size={size} />;
}
