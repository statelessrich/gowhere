import React from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "react-bootstrap-typeahead/css/Typeahead.css";
import "./header.scss";
import "./header-desktop.scss";

export default function Header({ cities }) {
  const history = useHistory();

  return (
    <div className="header text-center">
      <div className="overlay"></div>
      <Container className="header-content">
        <h1 className="title">gowhere</h1>
        <div className="search-container">
          <div className="search-input-container">
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <Typeahead
              id="search"
              placeholder="search"
              className="search"
              onChange={(selected) => {
                selected.length > 0 && history.push(`/city/${selected}`);
              }}
              options={cities.map((city) => city.name)}
              renderInput={(inputProps) => (
                <Form.Control size="lg" type="text" {...inputProps} />
              )}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
