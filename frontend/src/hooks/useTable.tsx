import { useEffect, useMemo, useState } from "react";
import { IUser } from "src/redux/api/types";

export default function useTable(data: IUser[], pageSize: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDataCount, setFilteredDataCount] = useState(0);
  const [filtered, setFiltered] = useState<IUser[]>(data);
  const [filterKey, setFilterKey] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [filterWarning, setFilterWarning] = useState(false);
  const [sortKey, setSortKey] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [resultCount, setResultCount] = useState(0);
  const [toggleFilterDropdown, setToggleFilterDropdown] = useState(false);
  const pagerCallback = (page: number) => setCurrentPage(page);

  const pagedData = useMemo(() => {
    function pageData() {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return filtered?.slice(firstPageIndex, lastPageIndex);
    }
    const paged = pageData();
    return paged;
  }, [currentPage, filtered, pageSize]);

  useMemo(() => {
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
    const filteredData = filterData(data);
    setFilteredDataCount(filteredData.length);
    setFiltered(filteredData);
  }, [data, filterKey, filterTerm]);

  function handleFiltering(e: any) {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    setFilterTerm(e.target.value);
  }

  function handleSorting(sortKey: string, type: string) {
    setSortKey(sortKey);
    setSortType(type);
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
    function sortData(data: IUser[]) {
      return [...data].sort((a: any, b: any) => {
        if (sortType === "string") {
          if (sortOrder === "asc") {
            return a[sortKey].localeCompare(b[sortKey]);
          }
          if (sortOrder === "desc") {
            return b[sortKey].localeCompare(a[sortKey]);
          } else {
            return 0;
          }
        } else if (sortType === "number") {
          if (sortOrder === "asc") {
            return a[sortKey] - b[sortKey];
          }
          if (sortOrder === "desc") {
            return b[sortKey] - a[sortKey];
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      });
    }
    if (sortKey !== "" && sortOrder !== "") {
      setFiltered(sortData(filtered));
    }
    setResultCount(filtered.length);
  }, [filtered, sortKey, sortOrder]);

  return {
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
  };
}
