import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../features/movie/movieSlice';
import { Link } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  console.log("moviess", movie);

  useEffect(() => {
    dispatch(fetchMovie("tt3896198"));
  }, [dispatch]);
  return (
    <>
        <div className="movieNav-container">
        <div className="movieNav-card-left">
          <Link to={`/moviesDetails/${movie.data.imdbID}`}>
            <img className="movieNav-image" src={movie.data.Poster} />
          </Link>
        </div>
        <div className="movieNav-card-right">
          <h2>
            <li>Movie : {movie.data.Title}</li>
          </h2>
          <br />
          <li>IMDB Rating : {movie.data.imdbRating}</li>
          <li>Year : {movie.data.Year}</li>
          <li>Language : {movie.data.Language}</li>
          <li>Rated : {movie.data.Rated}</li>
          <li>Released : {movie.data.Released}</li>
          <li>Runtime : {movie.data.Runtime}</li>
          <li>Genre : {movie.data.Genre}</li>
          <li>Director : {movie.data.Director}</li>
          <li>Actor : {movie.data.Actors}</li>
          <li>Plot : {movie.data.Plot}</li>
        </div>
      </div>
    </>
  )
}
