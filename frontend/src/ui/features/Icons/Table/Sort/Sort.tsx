import React from "react";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import "./Sort.styles.scss";

export default function TableHeaderSortIcon() {
  return <Icon classNames="sort" icon={faSort} />;
}
