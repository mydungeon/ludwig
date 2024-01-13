import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import FilterDropdownProps from "./FilterDropdown.types";
import "./FilterDropdown.styles.scss";

export default function FilterDropdown({
  columns,
  handleToggle,
  onClick,
  toggle,
}: FilterDropdownProps) {
  return (
    <div className="filterDropdown" data-testid="filterDropdown">
      <Icon icon={faChevronDown} handleClick={handleToggle} />
      {toggle && (
        <ul>
          {columns.map(
            (
              { name, filter }: { name: string; filter?: boolean },
              index: number
            ) =>
              filter === true && (
                <li key={index} onClick={() => onClick(name)}>
                  {name}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}
