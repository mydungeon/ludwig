import React, { useMemo, useState } from "react";
import SortableTableProps from "./Sortable.types";
import { Pager, Table, TableToolbar } from "src/ui/components";
import { IUser } from "src/redux/api/types";
import "./Sortable.styles.scss";

export default function SortableTable({
  columns,
  data,
  maxCellTextLength,
  pageSize,
}: SortableTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDataCount, setFilteredDataCount] = useState(0);
  const [filterKey, setFilterKey] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [filterWarning, setFilterWarning] = useState(false);
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [toggleFilterDropdown, setToggleFilterDropdown] = useState(false);
  const pagerCallback = (page: number) => setCurrentPage(page);

  const filteredData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    function filterData(data: IUser[]) {
      if (filterKey === "") {
        setFilterWarning(true);
        return [...data];
      }
      return [...data].filter((datum: any) => {
        const value = datum[filterKey.toLowerCase()];
        if (value.toLowerCase().includes(filterTerm.toLowerCase())) {
          return datum;
        } else {
          return null;
        }
      });
    }
    const filtered = filterData(data);
    setFilteredDataCount(filtered.length);
    return filtered.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, filterKey, filterTerm, pageSize]);

  const sortedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    function sortData(data: IUser[]) {
      return [...data].sort((a: any, b: any) => {
        if (sortOrder === "asc") {
          return a[sortField].localeCompare(b[sortField]);
        }
        if (sortOrder === "desc") {
          return b[sortField].localeCompare(a[sortField]);
        } else {
          return 0;
        }
      });
    }

    return sortData(data)?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize, sortField, sortOrder]);

  function handleFiltering(e: any) {
    setFilterTerm(e.target.value);
  }

  function handleSorting(sortField: string) {
    setSortField(sortField);
    setFilterKey("");
    sortOrder === "" || sortOrder === "desc"
      ? setSortOrder("asc")
      : setSortOrder("desc");
  }

  function handleSetFilterKey(key: string) {
    setFilterKey(key);
    setToggleFilterDropdown(false);
  }

  function handleSetToggleFilterDropdown() {
    setToggleFilterDropdown(!toggleFilterDropdown);
  }

  function handleClearFilter() {
    setFilterKey("");
    setFilterTerm("");
  }

  const tableData = filterTerm ? filteredData : sortedData;
  const resultCount = filterTerm ? filteredDataCount : data.length;

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
          data={tableData}
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
