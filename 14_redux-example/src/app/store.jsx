import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/loginSlice";
import newsReducer from "../feature/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
});
