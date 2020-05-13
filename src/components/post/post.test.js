import React from "react";
import { mount } from "enzyme";

import Post from "./Post";

describe("Post Component", () => {
  const props = {};

  beforeEach(() => {
    props.city = "Orlando";
    props.user = "Richard";
    props.text = "This is my post about orlando.";
  });

  it("renders a post", () => {
    const wrapper = mount(<Post {...props} />);
    expect(wrapper.text()).toBe("OrlandoRichardThis is my post about orlando.");
  });
});
