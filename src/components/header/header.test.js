import React from "react";
import { mount } from "enzyme";

import Header from "./Header";

describe("Header Component", () => {
  const props = {};

  beforeEach(() => {
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

  it("renders header with site name and search box", () => {
    const wrapper = mount(<Header {...props} />);
    expect(wrapper.text()).toMatch(/gowhere/);
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
