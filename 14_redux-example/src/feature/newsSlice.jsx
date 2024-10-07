import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsData: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk("getNews", async () => {
  const API_KEY = "f05fcb0355984e119134fdad9b47c07f";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const { data } = await axios(url);
  console.log(data.articles);
  return data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsData: (state) => {
      state.newsData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.newsData = payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearNewsData } = newsSlice.actions;

export default newsSlice.reducer;
