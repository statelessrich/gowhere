import * as types from "../actions/types";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {
  cities: [
    {
      id: 1,
      name: "Orlando",
      posts: [
        {
          id: 1,
          user: "Richard",
          text: "This is my post about orlando.",
        },
        {
          id: 2,
          user: "Richard",
          text: "second post.",
        },
      ],
    },
    {
      id: 2,
      name: "Miami",
      posts: [
        {
          id: 1,
          user: "Richard",
          text: "This is my post about miami.",
        },
      ],
    },
    // { id: 3, name: "St. Petersburg" ,posts:[]},
  ],
};
