import React, { useEffect, useMemo, useState } from "react";
import { useLazyGetUsersQuery } from "src/redux/api/user.api";
import { IUser } from "src/redux/api/types";
import Table from "src/ui/components/Table";
import { USER_TABLE_COLUMNS } from "src/ui/components/Table/Table.constants";
import Pager from "src/ui/components/Pager";
import Page from "src/ui/components/Page";
import "./Users.styles.scss";

const PageSize = 8;

export default function UsersPage() {
  const [data, setData] = useState<IUser[] | undefined>([]);
  const [getUsers] = useLazyGetUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  useEffect(() => {
    async function getUserAsync() {
      const data = await getUsers();
      setData(data?.data);
    }
    getUserAsync();
  }, [getUsers, data, setData]);

  return data ? (
    <Page classNames="users" pageTitleText="Users">
      <div className="tableWithPager">
        <Table
          columns={USER_TABLE_COLUMNS}
          data={currentTableData}
          maxCellTextLength={8}
        />
        <Pager
          className="pagerBar"
          currentPage={currentPage}
          totalCount={data?.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </Page>
  ) : null;
}
