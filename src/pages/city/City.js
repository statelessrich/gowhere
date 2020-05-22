import React from "react";
import Container from "react-bootstrap/Container";
import Post from "../../components/post/Post";

import "./city.scss";
import "./city-desktop.scss";

export default function City({ match, posts, cities }) {
  // city/:name
  const { name } = match.params;

  // validate city exists.
  const city = cities.find(
    (city) => city.name.toLowerCase() === name.toLowerCase(),
  );

  // filter posts by city.
  const cityPosts =
    city &&
    posts.filter((post) => post.city.toLowerCase() === city.name.toLowerCase());

  return (
    <div className="page city">
      {city && cityPosts.length > 0 ? (
        <Container className="city-content">
          <div
            className="city-header"
            style={{
              backgroundImage: `url("/static/img/cities/${city.name}.jpg")`,
            }}
          >
            <div className="overlay"></div>
            <h2 className="city-name">{city.name}</h2>
          </div>
          {cityPosts.map((post) => (
            <Post key={post.id} user={post.user} text={post.text}></Post>
          ))}
        </Container>
      ) : (
        <Container>
          <span className="error">Error: invalid city </span>
        </Container>
      )}
    </div>
  );
}
