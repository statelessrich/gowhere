import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./post.scss";

export default function Post({ city, user, text }) {
  return (
    <div className="post">
      <Card>
        {city && <div className="post-city">{city}</div>}
        <Card.Body>
          <Card.Title>
            <span
              style={{
                backgroundImage: `url("/static/img/users/${user}.jpg")`,
              }}
              className="user-avatar"
            >
              {/* <FontAwesomeIcon size="xs" color="white" icon={faUser} /> */}
            </span>
            <span className="username">{user}</span>
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
