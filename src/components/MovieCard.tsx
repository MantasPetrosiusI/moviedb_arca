import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: {
    imdbID: string;
    title: string;
    year: string;
    poster: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <Card className="movie-card" component={Link} to={`/movie/${movie.imdbID}`}>
    <CardMedia
      component="img"
      alt={movie.title}
      height="240"
      image={movie.poster}
      className="poster-image"
    />
    <CardContent>
      <Typography variant="h6" component="div">
        {movie.title}
      </Typography>
    </CardContent>
  </Card>
);

export default MovieCard;
