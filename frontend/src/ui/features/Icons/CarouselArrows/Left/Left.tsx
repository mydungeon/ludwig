import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Left.styles.scss";

export default function LeftCarouselArrowIcon({ callback }: IconsProps) {
  return (
    <Icon classNames="arrow left" icon={faChevronLeft} handleClick={callback} />
  );
}
