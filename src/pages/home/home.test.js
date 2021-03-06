import React from "react";
import { mount } from "enzyme";

import Home from "./Home";

describe("Home Component", () => {
  const props = {};

  beforeEach(() => {
    props.posts = [
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
    ];

    props.cities = [
      {
        id: 1,
        name: "Orlando",
      },
      {
        id: 2,
        name: "Miami",
      },
    ];
  });

  it("renders posts", () => {
    const wrapper = mount(<Home {...props} />);
    expect(wrapper.find("Post").length).toBe(3);
  });
});
