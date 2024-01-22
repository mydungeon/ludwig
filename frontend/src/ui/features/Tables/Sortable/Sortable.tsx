import React from "react";
import useTable from "src/hooks/useTable";
import SortableTableProps from "./Sortable.types";
import { Pager, Table, TableToolbar } from "src/ui/components";
import "./Sortable.styles.scss";

export default function SortableTable({
  columns,
  data,
  maxCellTextLength,
  pageSize,
}: SortableTableProps) {
  const {
    currentPage,
    filteredDataCount,
    filterKey,
    filterTerm,
    filterWarning,
    handleClearFilter,
    handleFiltering,
    handleSetFilterKey,
    handleSetToggleFilterDropdown,
    handleSorting,
    pagedData,
    pagerCallback,
    resultCount,
    toggleFilterDropdown,
  } = useTable(data, pageSize);

  return (
    data && (
      <div className="sortable" data-testid="sortable">
        <TableToolbar
          columns={columns}
          filterKey={filterKey}
          filterTerm={filterTerm}
          filterWarning={filterWarning}
          handleClearFilter={handleClearFilter}
          handleToggle={handleSetToggleFilterDropdown}
          onChange={handleFiltering}
          onClick={handleSetFilterKey}
          resultCount={resultCount}
          toggle={toggleFilterDropdown}
        />
        <Table
          columns={columns}
          data={pagedData}
          maxCellTextLength={maxCellTextLength}
          handleSetSortField={handleSorting}
        />
        <Pager
          className="pagerBar"
          currentPage={currentPage}
          totalCount={filterKey ? filteredDataCount : data.length}
          pageSize={pageSize}
          onPageChange={pagerCallback}
        />
      </div>
    )
  );
}
