export const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [
          ...state.watchList.filter((movie) => movie.id !== payload.id),
          payload,
        ],
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watched: [
          ...state.watched.filter((movie) => movie.id !== payload.id),
          payload,
        ],
      };
    case "REMOVE_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter((movie) => movie.id !== payload.id),
      };
    case "REMOVE_MOVIE_TO_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== payload.id),
      };
    case "ADD_MOVIE_TO_WATCHLIST_AND REMOVE":
      return {
        ...state,
        watchList: [
          ...state.watchList.filter((movie) => movie.id !== payload.id),
          payload,
        ],
        watched: state.watched.filter((movie) => movie.id !== payload.id)
      };
    default:
      return state;
  }
};
