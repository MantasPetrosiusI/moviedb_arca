export interface RootState {
  movies: MovieState;
}

export interface MovieSearch {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

export interface MovieDetails {
  Title: string;
  Poster: string;
  Year: string;
  Rated: string;
  Actors: string;
  imdbRating: string;
  Plot: string;
  imdbID: string;
  Director: string;
  Runtime: string;
  Writer: string;
  Genre: string;
}

export interface MovieState {
  moviesList: MovieSearch[];
  movie: MovieDetails | undefined;
  loadingSearch: boolean;
  loadingDetails: boolean;
}

export interface search {
  type: "FETCH_MOVIES";
  payload: MovieSearch[];
}

export interface movieDetails {
  type: "SET_MOVIE";
  payload: MovieDetails;
}
export interface loadingSearch {
  type: "SET_LOADING_SEARCH";
  payload: boolean;
}
export interface loadingDetails {
  type: "SET_LOADING_DETAILS";
  payload: boolean;
}

export interface resetState {
  type: "RESET_STATE";
}
