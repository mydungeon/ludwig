import React from "react";
import { FilterInputDropdownArrowIcon } from "src/ui/features/Icons";
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
      <FilterInputDropdownArrowIcon callback={handleToggle} />
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
