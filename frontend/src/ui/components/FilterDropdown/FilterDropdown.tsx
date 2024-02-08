import React from "react";
import FilterDropdownProps from "./FilterDropdown.types";
import "./FilterDropdown.styles.scss";

export default function FilterDropdown({
  columns,
  onClick,
  toggle,
}: FilterDropdownProps) {
  return toggle ? (
    <div className="filterDropdown" data-testid="filterDropdown">
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
    </div>
  ) : null;
}
