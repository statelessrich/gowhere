import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import City from "./pages/city/City";

import "./styles/global.scss";
import { fetchCities } from "./redux/actions/cityActions";
import { fetchPosts } from "./redux/actions/postActions";

export default function App() {
  const dispatch = useDispatch();

  

  // Get cities and posts on load
  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(cities);
  //   console.log(isLoading);
  //   console.log(error);
  // }, [cities, citiesError, isLoadingCities]);

  return (
    <div className="app">
      <Header></Header>

      {/* home page. */}
      <Route
        exact
        path="/"
        render={(props) => <Home {...props}></Home>}
      ></Route>
      {/* city page. */}
      <Route
        exact
        path="/city/:name"
        render={(props) => <City {...props}></City>}
      ></Route>
    </div>
  );
}
