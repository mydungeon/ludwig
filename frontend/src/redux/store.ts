import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./api/auth.api";
import { userApi } from "./api/user.api";
import userReducer from "./features/user.slice";
import { alertLoggerMiddleware } from "src/middleWare/AlertMiddleware";
import uiSlice from "./features/ui.slice";
import { gptApi } from "./api/gpt.api";
import gptReducer from "./features/gpt.slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [gptApi.reducerPath]: gptApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
    uiState: uiSlice,
    gptState: gptReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      alertLoggerMiddleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
