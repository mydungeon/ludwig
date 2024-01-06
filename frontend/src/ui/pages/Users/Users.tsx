import React, { useEffect, useState } from "react";
import { useLazyGetUsersQuery } from "src/redux/api/user.api";
import "./Users.styles.scss";
import { IUser } from "src/redux/api/types";
import Table from "src/ui/components/Table";
import { USER_TABLE_COLUMNS } from "src/ui/components/Table/Table.constants";
import Page from "src/ui/components/Page";

export default function UsersPage() {
  const [users, setUsers] = useState<IUser[] | undefined>([]);
  const [getUsers] = useLazyGetUsersQuery();

  useEffect(() => {
    async function getUserAsync() {
      const data = await getUsers();
      setUsers(data?.data);
    }
    getUserAsync();
  }, [getUsers, users, setUsers]);

  return (
    <Page classNames="users" pageTitleText="Users">
      <Table columns={USER_TABLE_COLUMNS} data={users} maxCellTextLength={8} />
    </Page>
  );
}
