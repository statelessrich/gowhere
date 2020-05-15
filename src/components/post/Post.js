import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
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
            <span className="user-avatar">
              <FontAwesomeIcon size="xs" color="white" icon={faUser} />
            </span>{" "}
            {user}
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
