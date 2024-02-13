import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginPayloadType } from "src/ui/features/Forms/Login/Login.schema";
import { RegisterPayloadType } from "src/ui/features/Forms/Register/Register.schema";
import { ChangePasswordPayloadType } from "src/ui/features/Forms/ChangePassword/ChangePassword.schema";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";
import { profileApi } from "./profile.api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<IUser, RegisterPayloadType>({
      query(data) {
        return {
          url: "auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<
      { access_token: string; status: string },
      LoginPayloadType
    >({
      query(data) {
        return {
          url: "auth/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(profileApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    changePassword: builder.mutation<
      { access_token: string; status: string },
      ChangePasswordPayloadType
    >({
      query(data) {
        return {
          credentials: "include",
          url: "auth/changePassword",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(authApi.endpoints.logoutUser.initiate());
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "auth/logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
