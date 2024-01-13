import React, { useMemo, useState } from "react";
import SortableTableProps from "./Sortable.types";
import FilterInput from "src/ui/components/FilterInput";
import { Pager, Table } from "src/ui/components";
import { IUser } from "src/redux/api/types";
import "./Sortable.styles.scss";

export default function SortableTable({
  columns,
  data,
  maxCellTextLength,
  pageSize,
}: SortableTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterTerm, setFilterTerm] = useState("");
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const pagerCallback = (page: number) => setCurrentPage(page);

  const filteredData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    function filterData(data: IUser[]) {
      if (filterTerm === "") return [...data];
      return [...data].filter((datum) => {
        if (datum.name.toLowerCase().includes(filterTerm)) {
          return datum;
        } else {
          return null;
        }
      });
    }

    return filterData(data)?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, filterTerm, pageSize]);

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
    if (sortOrder === "" || sortOrder === "desc") {
      setSortOrder("asc");
    } else {
      setSortOrder("desc");
    }
  }

  return (
    <div className="sortable" data-testid="sortable">
      <FilterInput onChange={handleFiltering} />
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
  );
}
