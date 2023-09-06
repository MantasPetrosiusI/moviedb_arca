import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setMovieDetails } from "../redux/actions";
import { RootState } from "../redux/interfaces";
import "../css/MovieDetails.css";

const MovieDetails = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (imdbID) {
      dispatch(setMovieDetails(imdbID));
    }
  }, [dispatch, imdbID]);

  const setMovie = useAppSelector((state: RootState) => state.movies.movie);

  if (!setMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <div className="poster">
        <img src={setMovie.Poster} alt={`${setMovie.Title} Poster`} />
      </div>
      <div className="info">
        <h2>{setMovie.Title}</h2>
        <section className="movie-info">
          <h3>Movie Info</h3>
          <p>Genre: {setMovie.Genre}</p>
          <p>Year: {setMovie.Year}</p>
          <p>Rated: {setMovie.Rated}</p>
          <p>Runtime: {setMovie.Runtime}</p>
        </section>
        <section className="crew">
          <h3>Crew</h3>
          <p>Director: {setMovie.Director}</p>
          <p>Writer: {setMovie.Writer}</p>
        </section>
        <section className="cast">
          <h3>Cast</h3>
          <p>Actors: {setMovie.Actors}</p>
        </section>
        <section className="summary">
          <h3>Summary</h3>
          <p>{setMovie.Plot}</p>
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;
