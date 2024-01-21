import React, { useEffect, useMemo, useState } from "react";
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
  const [tableData, setTableData] = useState<IUser[]>(data);
  const [resultCount, setResultCount] = useState(0);
  const [toggleFilterDropdown, setToggleFilterDropdown] = useState(false);
  const pagerCallback = (page: number) => setCurrentPage(page);

  const pagedData = useMemo(() => {
    function pageData() {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return tableData?.slice(firstPageIndex, lastPageIndex);
    }

    const paged = pageData();
    return paged;
  }, [currentPage, pageSize, tableData]);

  const filteredData = useMemo(() => {
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

    setTableData(filtered);
  }, [data, filterKey, filterTerm]);

  const sortedData = useMemo(() => {
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

    const sorted = sortData(data);
    setTableData(sorted);
  }, [data, sortField, sortOrder]);

  function handleFiltering(e: any) {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
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

  useEffect(() => {
    setResultCount(tableData.length);
  }, [data, filterTerm, filteredData, sortedData, tableData]);

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
