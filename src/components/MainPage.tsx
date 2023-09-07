import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface Movie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
}

const headingStyle: React.CSSProperties = {
  marginTop: "20px",
  textAlign: "center",
};

const MainPage = () => {
  const storedMovies: Movie[] = JSON.parse(
    localStorage.getItem("LastMoviesSearched") || "[]"
  );

  return (
    <div className="main-container">
      <h2 style={headingStyle}>Last Movies Looked Up</h2>
      <Grid container spacing={2}>
        {storedMovies.map((movie: Movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
            <Card
              className="movie-card"
              component={Link}
              to={`/movie/${movie.imdbID}`}
            >
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MainPage;
