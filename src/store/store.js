import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import userSlice from "./userSlice";
import movieSlice from "./moviesSlice";

export const store = configureStore({ reducer: { home: homeSlice.reducer, user: userSlice.reducer, movies: movieSlice.reducer } });
