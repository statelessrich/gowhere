import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { mount } from "enzyme";
import store from "./redux/store";
import { createBrowserHistory } from "history";

import App from "./App";

describe("App Component", () => {
  const history = createBrowserHistory();

  it("renders home page without crashing", () => {
    const wrapper = mount(
      <Router history={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    );
    expect(wrapper.find("Home").length).toBe(1);
  });
});
