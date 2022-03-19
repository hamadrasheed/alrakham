import { ADD_SEARCH } from "../constants/searchConstants";

function searchReducer(state = null, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return action.payload;
    default: return state;
  }
}

export {
  searchReducer,
}