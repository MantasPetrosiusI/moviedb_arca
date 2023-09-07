import { AppDispatch } from "../store";

export const SET_MOVIE = "SET_MOVIE";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const SET_LOADING_DETAILS = "SET_LOADING_DETAILS";
export const SET_LOADING_SEARCH = "SET_LOADING_SEARCH";
export const RESET_STATE = "RESET_STATE";

export const fetchMovies = (title: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: SET_LOADING_SEARCH, payload: true });
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL_SEARCH}/${title}`,
        {
          method: "GET",
        }
      );

      if (res.ok) {
        const movies = await res.json();
        dispatch({
          type: FETCH_MOVIES,
          payload: movies.Search,
        });
        dispatch({
          type: SET_LOADING_SEARCH,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const setMovieDetails = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: SET_LOADING_DETAILS, payload: true });
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL_MOVIES}/${id}`,
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const movie = await res.json();
        console.log(movie);
        dispatch({
          type: SET_MOVIE,
          payload: movie,
        });
        dispatch({
          type: SET_LOADING_DETAILS,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
