import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../css/MovieItem.css";
import { Link } from "react-router-dom";

interface MovieItemProps {
  poster: string;
  title: string;
  year: string;
  imdbID: string;
}

const MovieItem: React.FC<MovieItemProps> = ({
  poster,
  title,
  year,
  imdbID,
}) => {
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
        <Button size="small" component={Link} to={`/movie/${imdbID}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
