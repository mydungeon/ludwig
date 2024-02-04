import React from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./TogglePassword.styles.scss";

export default function TogglePasswordIcon({ callback, toggle }: IconsProps) {
  const icon = toggle ? faEye : faEyeSlash;

  return (
    <span className="togglePassword">
      <Tooltip
        message={toggle ? `show password` : `hide password`}
        direction={TooltipDirection.TOP_LEFT}
      >
        <Icon icon={icon} handleClick={callback} />
      </Tooltip>
    </span>
  );
}
