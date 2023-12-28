import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoHomeSharp } from "react-icons/io5";

export const MovieList = () => {
  const searchResults = useSelector((state) => state.movie.searchResults);
  const searchTerm = useSelector((state) => state.movie.searchTerm);

  return (
    <>
      <div>
        {searchResults.length > 0 && (
          <div>
            <Link to="/navbar">
              <h1 className="movieList-backBtn">{<IoHomeSharp />} Home</h1>
            </Link>
            <ul>
            <div className="list-result">
            <h1>Search Results for "{searchTerm}"</h1>
            </div>
              <div className="search-Movie-result-content">
                {searchResults?.map((movie) => {
                  return (
                    <div key={movie.imdbID} className="hover">
                      <Link to={`/moviesDetails/${movie.imdbID}`}>
                        <div>
                          <img
                            className="movieList-image"
                            src={movie?.Poster}
                          />
                        </div>
                      </Link>
                      <div className="movieList-title">
                        <h3>Name: {movie.Title}</h3>
                        <div className="list-type-h3">
                          <h3>Year: {movie.Year}</h3>
                          <h3>Year: {movie.Type}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
