import { getPosts as getPostsFromApi } from "../../services/api/api";

export const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: { posts },
  };
};

export const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: { error },
  };
};

export function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostsBegin());

    return getPostsFromApi()
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data.posts));
        return response.data.posts;
      })
      .catch((error) => dispatch(fetchPostsError(error.message)));
  };
}
