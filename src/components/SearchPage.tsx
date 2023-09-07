// SearchPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/interfaces";
import MovieItem from "./MovieItem";
import { fetchMovies, resetState } from "../redux/actions";
import Spinner from "./Spinner";
import KeywordList from "./KeywordList";

function SearchPage() {
  const { keyword } = useParams<{ keyword: string }>();
  const temp = keyword?.split("keyword=");
  const newKeyword = temp ? temp[1] : "";

  const searchedMovies = useAppSelector(
    (state: RootState) => state.movies.moviesList
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.movies.loadingSearch
  );
  const dispatch = useAppDispatch();

  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);

  useEffect(() => {
    dispatch(resetState());

    const storedKeywords = localStorage.getItem("recentKeywords");
    if (storedKeywords) {
      const parsedKeywords = JSON.parse(storedKeywords);

      const updatedKeywords = Array.from(
        new Set([newKeyword, ...parsedKeywords])
      ).slice(0, 15);

      setRecentKeywords(updatedKeywords);
      localStorage.setItem("recentKeywords", JSON.stringify(updatedKeywords));
    } else if (newKeyword) {
      setRecentKeywords([newKeyword]);
      localStorage.setItem("recentKeywords", JSON.stringify([newKeyword]));
    }
  }, [dispatch, newKeyword]);

  const handleKeywordClick = (keyword: string) => {
    dispatch(fetchMovies(keyword));
  };

  return (
    <div className="search-page">
      {isLoading ? (
        <Spinner />
      ) : searchedMovies.length > 0 ? (
        <>
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
          <KeywordList
            keywords={recentKeywords}
            onKeywordClick={handleKeywordClick}
          />
        </>
      ) : (
        <>
          <KeywordList
            keywords={recentKeywords}
            onKeywordClick={handleKeywordClick}
          />
          <p>No movies found.</p>
        </>
      )}
    </div>
  );
}

export default SearchPage;
