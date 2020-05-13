import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import City from "./pages/city/City";
import { getCities } from "./redux/actions/cityActions";
import { getCities as getCitiesApi } from "./services/api/api";

import "./styles/global.scss";

function App() {
  let cities;
  let posts;

  useEffect(() => {
    getCitiesApi();
  }, []);

  return (
    <div className="App">
      <Header cities={cities}></Header>

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} posts={posts}></Home>}
          ></Route>
          <Route
            path="/city/:name"
            render={(props) => <City {...props} posts={posts}></City>}
          ></Route>
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

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  getCities: () => dispatch(getCities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
