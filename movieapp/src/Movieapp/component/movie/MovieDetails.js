import React, { useEffect } from "react";
import { fetchMovieDetails } from "../../features/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieList } from "./MovieList";
import poster from "../../assets/moviePoster.webp";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movie);
  const { movieDetails } = movieDetail;
  console.log(movieDetails);
  // console.log(movieDetails.data.Poster);

  const searchResults = useSelector((state) => state.movie.searchResults);
  console.log(searchResults);

  const posterUrl = movieDetails?.data?.Poster || <img src={poster} />;
  // const status = useSelector(selectStatus);
  // const error = useSelector(selectError);

  const param = useParams();
  const { id } = param;
  console.log(id);
  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="movieDetail-Card">
        <div className="left-movieDetail">
          <img
            className="movieDetail-image"
            src={posterUrl}
            alt="Movie Poster"
          />
        </div>
        <div className="right-movieDetail">
          <h2>
            <li>Movie : {movieDetails?.data?.Title}</li>
          </h2>
          <br />
          <li>IMDB Rating : {movieDetails?.data?.imdbRating}</li>
          <li>Year : {movieDetails?.data?.Year}</li>
          <li>Language : {movieDetails?.data?.Language}</li>
          <li>Rated : {movieDetails?.data?.Rated}</li>
          <li>Released : {movieDetails?.data?.Released}</li>
          <li>Runtime : {movieDetails?.data?.Runtime}</li>
          <li>Genre : {movieDetails?.data?.Genre}</li>
          <li>Director : {movieDetails?.data?.Director}</li>
          <li>Actor : {movieDetails?.data?.Actors}</li>
          <li>Plot : {movieDetails?.data?.Plot}</li>
        </div>
      </div>
      <MovieList/>
    </>
  );
};
