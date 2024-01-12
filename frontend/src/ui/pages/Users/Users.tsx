import React, { useEffect, useMemo, useState } from "react";
import { useLazyGetUsersQuery } from "src/redux/api/user.api";
import { IUser } from "src/redux/api/types";
import { Table } from "src/ui/components";
import { Pager } from "src/ui/components";
import { Page } from "src/ui/components";
import { USER_TABLE_COLUMNS } from "src/ui/components/Table/Table.constants";
import "./Users.styles.scss";

const PageSize = 8;

export default function UsersPage() {
  const [data, setData] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [getUsers] = useLazyGetUsersQuery();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

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
  }, [currentPage, data, sortField, sortOrder]);

  useEffect(() => {
    async function sortDataAsync() {
      const { data } = await getUsers();
      setData(data!);
    }
    sortDataAsync();
  }, [data, getUsers, setData]);

  function handleSorting(sortField: string) {
    setSortField(sortField);
    if (sortOrder === "" || sortOrder === "desc") {
      setSortOrder("asc");
    } else {
      setSortOrder("desc");
    }
  }
  return data ? (
    <Page classNames="users" pageTitle="Users">
      <div className="tableWithPager">
        <Table
          columns={USER_TABLE_COLUMNS}
          data={currentTableData}
          maxCellTextLength={8}
          handleSetSortField={handleSorting}
        />
        <Pager
          className="pagerBar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </Page>
  ) : null;
}
