import React from "react";
import Container from "react-bootstrap/Container";
import Post from "../../components/post/Post";

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
        <Container>
          {city.name}
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
