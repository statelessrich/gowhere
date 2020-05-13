import React from "react";
import Card from "react-bootstrap/Card";

export default function Post({ city, user, text }) {
  return (
    <div className="post">
      <Card>
        {city && <Card.Header className="post-city">{city}</Card.Header>}
        <Card.Body>
          <Card.Title>{user}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
