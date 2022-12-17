export const initialState = {
    watchList:localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
    watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
}
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case "":
    return { ...state, payload }

  default:
    return state
  }
}
