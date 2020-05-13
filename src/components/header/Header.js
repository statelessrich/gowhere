import React from "react";
// import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
// import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default function Header({ cities }) {
  // const history = useHistory();

  return (
    <div className="header text-center">
      <Container>
        <h1>gowhere</h1>
        {/* <Typeahead
          id="search"
          placeholder="search"
          className="search"
          onChange={(selected) => {
            selected && history.push(`/city/${selected}`);
          }}
          options={cities.map((city) => city.name)}
        />{" "} */}
      </Container>
    </div>
  );
}
