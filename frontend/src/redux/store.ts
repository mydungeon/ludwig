import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { alertLoggerMiddleware } from "src/middleWare/AlertMiddleware";
import { authApi } from "./api/auth.api";
import { chatApi } from "./api/chat.api";
import chatReducer from "./features/chat.slice";
import { gptApi } from "./api/gpt.api";
import gptReducer from "./features/gpt.slice";
import { profileApi } from "./api/profile.api";
import profileReducer from "./features/profile.slice";
import uiSlice from "./features/ui.slice";
import { userApi } from "./api/user.api";
import userReducer from "./features/user.slice";
import { usersApi } from "./api/users.api";
import usersReducer from "./features/users.slice";
import apiSlice from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [gptApi.reducerPath]: gptApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    chatState: chatReducer,
    gptState: gptReducer,
    profileState: profileReducer,
    uiState: uiSlice,
    userState: userReducer,
    usersState: usersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      alertLoggerMiddleware,
      authApi.middleware,
      chatApi.middleware,
      gptApi.middleware,
      profileApi.middleware,
      userApi.middleware,
      usersApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
