import React, { useEffect, useState } from "react";
import { useLazyGetUsersQuery } from "src/redux/api/user.api";
import { IUser } from "src/redux/api/types";
import { Page } from "src/ui/components";
import { SortableTable } from "src/ui/features/Tables";
import {
  PAGE_SIZE,
  MAX_CELL_TEXT_LENGTH,
  USER_TABLE_COLUMNS,
} from "src/ui/components/Table/Table.constants";

export default function UsersPage() {
  const [data, setData] = useState<IUser[]>([]);
  const [getUsers] = useLazyGetUsersQuery();

  useEffect(() => {
    async function sortDataAsync() {
      const { data } = await getUsers();
      setData(data!);
    }

    sortDataAsync();
  }, [data, getUsers, setData]);

  return (
    data && (
      <Page classNames="users" pageTitle="Users">
        <SortableTable
          columns={USER_TABLE_COLUMNS}
          data={data}
          maxCellTextLength={MAX_CELL_TEXT_LENGTH}
          pageSize={PAGE_SIZE}
        />
      </Page>
    )
  );
}
