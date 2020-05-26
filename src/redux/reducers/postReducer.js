import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from "../actions/postActions";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
      };

    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        posts: [],
      };

    default:
      return state;
  }
}
