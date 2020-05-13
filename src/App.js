import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import City from "./pages/city/City";

import "./styles/global.scss";

export default function App() {
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header cities={cities}></Header>

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} cities={cities}></Home>}
          ></Route>
          {/* <Route
            path="/city/:name"
            render={(props) => <City {...props} posts={posts}></City>}
          ></Route> */}
        </Switch>
      </BrowserRouter>

      {/* <Home posts={posts}></Home> */}

      {/* <h2>cities</h2> */}
      {/* {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          posts={posts.filter((post) => post.city === city.name)}
        ></City>
      ))} */}
    </div>
  );
}
