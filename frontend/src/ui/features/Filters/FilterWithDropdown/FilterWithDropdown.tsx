import React from "react";
import FilterWithDropdownProps from "./FilterWithDropdown.types";
import FilterInput from "src/ui/components/FilterInput";
import FilterDropdown from "src/ui/components/FilterDropdown";
import "./FilterWithDropdown.styles.scss";

export default function FilterWithDropdown({
  columns,
  filterTerm,
  handleToggle,
  onChange,
  onClick,
  toggle,
}: FilterWithDropdownProps) {
  return (
    <div className="filterWrapper">
      <div className="filterWithDropdown" data-testid="filterwithdropdown">
        <FilterInput filterTerm={filterTerm} onChange={onChange} />
        <FilterDropdown
          columns={columns}
          handleToggle={handleToggle}
          onClick={onClick}
          toggle={toggle}
        />
      </div>
    </div>
  );
}
