import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthGenre = createAsyncThunk("movie/getGenre", async () => {
  const { data, status } = await axios.get(`https://moviesapi.ir/api/v1/genres`);

  if (status == 200) return data;
});
export const primeryMovies = createAsyncThunk("movie/MovieGener", async (genre = 1, page = 1) => {
  const { data, status } = await axios.get(`https://moviesapi.ir/api/v1/genres/${genre}/movies?page=${page}`);
  if (status == 200) return data;
});
export const getMovies = createAsyncThunk("movie/Movie", async (dataSend) => {
  const { genre, page } = dataSend;
  const { data, status } = await axios.get(`https://moviesapi.ir/api/v1/genres/${genre}/movies?page=${page}`);
  console.log(data,"data was resived");
  if (status == 200) return data;
});
const initialState = {
  genre: [],
  movies: [],
  metaData: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fecthGenre.fulfilled, (state, action) => {
        state.genre = [...action.payload];
      })
      .addCase(primeryMovies.fulfilled, (state, action) => {
        const data = action.payload;
        
        state.movies = data.data;
        state.metaData = data.metadata;
        return state;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        const data = action.payload;
        console.log(data.data, "Movies are Resived");
        state.movies = data.data;
        state.metaData = data.metadata;
        return state;
      });
  },
});
export const movieAction = movieSlice.actions;
export default movieSlice;
