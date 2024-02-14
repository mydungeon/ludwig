import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./api/auth.api";
import { userApi } from "./api/user.api";
import userReducer from "./features/user.slice";
import { profileApi } from "./api/profile.api";
import profileReducer from "./features/profile.slice";
import { usersApi } from "./api/users.api";
import usersReducer from "./features/users.slice";
import { alertLoggerMiddleware } from "src/middleWare/AlertMiddleware";
import uiSlice from "./features/ui.slice";
import { gptApi } from "./api/gpt.api";
import gptReducer from "./features/gpt.slice";
import { chatApi } from "./api/chat.api";
import chatReducer from "./features/chat.slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [gptApi.reducerPath]: gptApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    chatState: chatReducer,
    usersState: usersReducer,
    userState: userReducer,
    profileState: profileReducer,
    uiState: uiSlice,
    gptState: gptReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      chatApi.middleware,
      userApi.middleware,
      usersApi.middleware,
      profileApi.middleware,
      gptApi.middleware,
      alertLoggerMiddleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
