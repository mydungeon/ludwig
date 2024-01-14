import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Right.styles.scss";

export default function RightCarouselArrowIcon({ callback }: IconsProps) {
  return (
    <Icon
      classNames="arrow right"
      icon={faChevronRight}
      handleClick={callback}
    />
  );
}
