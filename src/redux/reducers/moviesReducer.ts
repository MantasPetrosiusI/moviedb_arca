import {
  search,
  movieDetails,
  loadingSearch,
  loadingDetails,
  resetState,
} from "../interfaces/index";

type Action =
  | search
  | movieDetails
  | loadingSearch
  | loadingDetails
  | resetState;

const initialState = {
  moviesList: [],
  movie: undefined,
  loadingSearch: false,
  loadingDetails: false,
};

const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        moviesList: action.payload,
      };
    case "SET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "SET_LOADING_SEARCH":
      return {
        ...state,
        loadingSearch: action.payload,
      };
    case "SET_LOADING_DETAILS":
      return {
        ...state,
        loadingDetails: action.payload,
      };

    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default moviesReducer;
