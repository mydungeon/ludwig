import React from "react";
import TableToolbarProps from "./TableToolbar.types";
import { FilterWithDropdown } from "src/ui/features/Filters";
import { FilterInputClearIcon } from "src/ui/features/Icons";
import "./TableToolbar.styles.scss";

export default function TableToolbar({
  columns,
  filterKey,
  filterTerm,
  handleClearFilter,
  handleToggle,
  onChange,
  onClick,
  resultCount,
  toggle,
}: TableToolbarProps) {
  return (
    <div className="tableToolbar" data-testid="tableToolbar">
      <div className="results">
        <h3>{`Results: ${resultCount}`}</h3>
      </div>
      <div className="filterWrapper">
        <div className="filterCritera">
          {filterKey ? `Filter by: ${filterKey}` : `Add filter criteria`}
          {filterKey && <FilterInputClearIcon callback={handleClearFilter} />}
        </div>
        <FilterWithDropdown
          columns={columns}
          filterTerm={filterTerm}
          handleToggle={handleToggle}
          onChange={onChange}
          onClick={onClick}
          toggle={toggle}
        />
      </div>
    </div>
  );
}
