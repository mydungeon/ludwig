import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "src/redux/features/user.slice";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";
import { UpdatePayloadType } from "src/ui/features/Forms/Edit/Profile/Profile.schema";
import { UpdateRolePayloadType } from "src/ui/features/Forms/Edit/Role/Role.schema";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
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
  }),
});

export const { useUpdateMyRolesMutation } = userApi;
