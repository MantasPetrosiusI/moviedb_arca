import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "../css/MovieItem.css";

interface MovieItemProps {
  poster: string;
  title: string;
  year: string;
  imdbID: string;
}

const localStorageKey = "LastMoviesSearched";

const MovieItem: React.FC<MovieItemProps> = ({
  poster,
  title,
  year,
  imdbID,
}) => {
  const handleClick = () => {
    try {
      const movieInfo = {
        imdbID: imdbID,
        title: title,
        year: year,
        poster: poster,
      };

      const existingMovies: MovieItemProps[] = JSON.parse(
        localStorage.getItem(localStorageKey) || "[]"
      );

      existingMovies.unshift(movieInfo);

      if (existingMovies.length > 10) {
        existingMovies.pop();
      }

      localStorage.setItem(localStorageKey, JSON.stringify(existingMovies));
    } catch (error) {
      console.error("Error while handling local storage:", error);
    }
  };

  return (
    <Card className="movie-card">
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={poster}
        className="poster-image"
      />
      <CardContent className="text-content">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          size="small"
          onClick={handleClick}
          component={Link}
          to={`/movie/${imdbID}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
