import React from "react";
import { mount } from "enzyme";

import Home from "./Home";

describe("Home Component", () => {
  const props = {};

  beforeEach(() => {
    props.cities = [
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
    ];
  });

  it("renders posts", () => {
    const wrapper = mount(<Home {...props} />);
    expect(wrapper.find("Post").length).toBe(3);
  });
});
