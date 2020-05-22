// import * as types from "../actions/types";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {
  posts: [
    {
      id: 1,
      city: "Orlando",
      user: "Richard",
      text: "This is my post about orlando.",
    },
    {
      id: 2,
      city: "Orlando",
      user: "Richard",
      text: "second post.",
    },
    {
      id: 3,
      city: "Miami",
      user: "Richard",
      text: "This is my post about miami.",
    },
  ],
};
