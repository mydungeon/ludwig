import React, { useEffect, useState } from "react";
import { useGetUsersQuery, useLazyGetUsersQuery } from "src/redux/api/user.api";
import "./Users.styles.scss";
import { IUser } from "src/redux/api/types";
import Table from "src/ui/components/Table";

export default function UsersPage() {
  const [users, setUsers] = useState<IUser[] | undefined>([]);
  const [getUsers, { isLoading, isSuccess }] = useLazyGetUsersQuery();

  useEffect(() => {
    async function getUserAsync() {
      const data = await getUsers();
      setUsers(data?.data);
    }
    getUserAsync();
  }, [getUsers, users, setUsers]);
  console.log("users", users);
  console.log("test");
  return (
    <div className="users" data-testid="users">
      <h1>Users</h1>
      <Table data={users} />
    </div>
  );
}
