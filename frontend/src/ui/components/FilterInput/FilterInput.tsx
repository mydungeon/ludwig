import React from "react";
import FilterInputProps from "./FilterInput.types";
import { FilterInputDropdownArrowIcon } from "src/ui/features/Icons";
import "./FilterInput.styles.scss";

export default function FilterInput({
  filterTerm,
  handleToggle,
  onChange,
}: FilterInputProps) {
  return (
    <div className="filterInput" data-testid="filterInput">
      <input
        className="input filter"
        onChange={onChange}
        placeholder="Filter users"
        type="text"
        value={filterTerm}
      />
      <div className="filterInputDropdownArrowIcon">
        <FilterInputDropdownArrowIcon callback={handleToggle} />
      </div>
    </div>
  );
}
