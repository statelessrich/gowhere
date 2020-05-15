import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import City from "./pages/city/City";

import "./styles/global.scss";

export default function App() {
  const cities = useSelector((state) => state.cityReducer.cities);
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Header cities={cities}></Header>
      {/* home page. */}
      <Route
        exact
        path="/"
        render={(props) => <Home {...props} posts={posts}></Home>}
      ></Route>
      {/* city page. */}
      <Route
        exact
        path="/city/:name"
        render={(props) => (
          <City {...props} posts={posts} cities={cities}></City>
        )}
      ></Route>
    </div>
  );
}
