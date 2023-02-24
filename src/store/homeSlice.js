import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const moveiSlider = createAsyncThunk("movie/fetchMovie", async () => {
  let page = Math.trunc(Math.random() * 5);
  let gener = Math.trunc(Math.random() * 10);
  const { data, status } = await axios.get(`https://moviesapi.ir/api/v1/genres/${gener}/movies?page=${page}`);
  if (status == 200) return data.data;
});
let initialState = {
  gener: [],
  moveies: [],
  status: "idle", //"succses" "loading" "idle" "faild"
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(moveiSlider.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(moveiSlider.fulfilled, (state, action) => {
        const movies = action.payload;
        state.moveies = movies;
        state.status = "succses";
      });
  },
});

export const homeAction = homeSlice.actions;

export default homeSlice;
