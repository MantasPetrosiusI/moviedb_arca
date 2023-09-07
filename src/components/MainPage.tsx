import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MovieCard from "./MovieCard";

interface Movie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
}

const MainPage: React.FC = () => {
  const getStoredMovies = (): Movie[] => {
    try {
      const storedMovies = localStorage.getItem("LastMoviesSearched");
      if (storedMovies) {
        return JSON.parse(storedMovies);
      }
    } catch (error) {
      console.error("Error parsing stored movies:", error);
    }
    return [];
  };

  const storedMovies: Movie[] = getStoredMovies();

  return (
    <div className="main-container">
      <h2 style={{ textAlign: "center" }}>Last Movies Looked Up</h2>
      {storedMovies.length === 0 ? (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          No movies found.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {storedMovies.map((movie: Movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MainPage;
