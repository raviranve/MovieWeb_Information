import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for fetching movie data
export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (movieId) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=c255d4e5`
    );
    console.log(response);
    return response.data;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/search",
  async (searchTerm) => {
    console.log(searchTerm,"fghgfd");
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=c255d4e5`
    );
    // console.log(response.data.Search);
    return response.data.Search || [];
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=c255d4e5`
    );
    // const data = await response.json();
    console.log(response);
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieDetails: null,
    data: {},
    searchResults: [],
    searchTerm: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieDetails = action.payload;
        console.log(state.movieDetails);
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
        console.log("sfgdrsgf",action.payload);
        state.searchTerm = action.meta.arg;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
export const {} = movieSlice.actions;
