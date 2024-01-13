import React, { useMemo, useState } from "react";
import SortableTableProps from "./Sortable.types";
import { Pager, Table } from "src/ui/components";
import { IUser } from "src/redux/api/types";
import "./Sortable.styles.scss";
import { FilterWithDropdown } from "../../Filters";

export default function SortableTable({
  columns,
  data,
  maxCellTextLength,
  pageSize,
}: SortableTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterKey, setFilterKey] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [toggleFilterDropdown, setToggleFilterDropdown] = useState(false);
  const pagerCallback = (page: number) => setCurrentPage(page);

  const filteredData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    function filterData(data: IUser[]) {
      if (filterKey === "") return [...data];
      return [...data].filter((datum: any) => {
        const value = datum[filterKey];
        if (value.toLowerCase().includes(filterTerm)) {
          return datum;
        } else {
          return null;
        }
      });
    }

    return filterData(data)?.slice(firstPageIndex, lastPageIndex);
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

  return (
    data && (
      <div className="sortable" data-testid="sortable">
        <div className="filterCritera">
          {filterKey ? `Filter by: ${filterKey}` : `Add filter criteria`}
        </div>
        <FilterWithDropdown
          columns={columns}
          handleToggle={handleSetToggleFilterDropdown}
          onChange={handleFiltering}
          onClick={handleSetFilterKey}
          toggle={toggleFilterDropdown}
        />
        <Table
          columns={columns}
          data={filterTerm ? filteredData : sortedData}
          maxCellTextLength={maxCellTextLength}
          handleSetSortField={handleSorting}
        />
        <Pager
          className="pagerBar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={pagerCallback}
        />
      </div>
    )
  );
}
