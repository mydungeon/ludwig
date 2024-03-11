import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({}),
  tagTypes: ["User", "Auth", "Room", "Message"],
  keepUnusedDataFor: 5,
});

export default apiSlice;
