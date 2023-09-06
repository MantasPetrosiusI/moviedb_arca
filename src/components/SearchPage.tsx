import React, { useEffect } from "react";
import "../css/SearchPage.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/interfaces";
import MovieItem from "./MovieItem";
import { resetState } from "../redux/actions";

function SearchPage() {
  const searchedMovies = useAppSelector(
    (state: RootState) => state.movies.moviesList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div className="search-page">
      {searchedMovies !== undefined ? (
        <div className="movie-list">
          {searchedMovies.map((movie, index) => (
            <MovieItem
              key={index}
              imdbID={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default SearchPage;
