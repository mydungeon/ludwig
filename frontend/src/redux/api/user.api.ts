import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser, setUsers } from "src/redux/features/user.slice";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";
import { UpdatePayloadType } from "src/ui/features/Forms/Edit/Profile/Profile.schema";
import { UpdateRolePayloadType } from "src/ui/features/Forms/Edit/Role/Role.schema";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, null>({
      query() {
        return {
          url: "users/me",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
      providesTags: ["User"],
    }),
    updateMe: builder.mutation<IUser, UpdatePayloadType>({
      query(data) {
        return {
          credentials: "include",
          url: "users/me",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { name, email }) => [
        { type: "User", name, email },
      ],
    }),
    updateMyRoles: builder.mutation<IUser, UpdateRolePayloadType>({
      query(data) {
        return {
          credentials: "include",
          url: "users/me/roles",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { roles }) => [{ type: "User", roles }],
    }),
    getUsers: builder.query<IUser[], void>({
      query() {
        return {
          url: "users/",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { users: IUser[] } }) =>
        result.data.users,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUsers(data));
        } catch (error) {}
      },
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useUpdateMeMutation,
  useUpdateMyRolesMutation,
  useGetUsersQuery,
  useLazyGetUsersQuery,
} = userApi;
