import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/loginSlice";
import newsReducer from "../feature/newsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});