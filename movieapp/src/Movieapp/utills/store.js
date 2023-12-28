// store.js
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    movie: movieSlice,
    user: authSlice,
  }
});

export default store;
