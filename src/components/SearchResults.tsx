import "../css/SearchResults.css"; // Import the CSS file

function SearchResults() {
  // Assuming you have an array of search results
  const searchResults = [
    {
      id: 1,
      title: "Movie 1",
      releaseYear: 2023,
      poster: "movie-poster-1.jpg",
    },
    {
      id: 2,
      title: "Movie 2",
      releaseYear: 2022,
      poster: "movie-poster-2.jpg",
    },
    // Add more results
  ];

  return (
    <div className="search-results">
      {searchResults.map((movie) => (
        <div key={movie.id} className="search-result-card">
          <img className="movie-poster" src={movie.poster} alt={movie.title} />
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-release-year">
            Release Year: {movie.releaseYear}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
