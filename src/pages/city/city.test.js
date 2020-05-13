import React from "react";
import { mount } from "enzyme";

import City from "./City";

describe("City Component", () => {
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

  it("renders posts for valid city", () => {
    props.match = { params: { name: "Orlando" } };
    const wrapper = mount(<City {...props} />);
    expect(wrapper.find("Post").length).toBe(2);
  });

  it("renders error for invalid city", () => {
    props.match = { params: { name: "potato" } };
    const wrapper = mount(<City {...props} />);
    expect(wrapper.text()).toMatch(/Error/);
  });
});
