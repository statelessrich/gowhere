import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import store from "./redux/store";

import App from "./App";

describe("App Component", () => {
  let props;
  beforeEach(() => {});

  it("renders home page without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );
    expect(wrapper.find("Home").length).toBe(1);
  });
});
