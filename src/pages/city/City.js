import React from "react";
import Container from "react-bootstrap/Container";
import Post from "../../components/post/Post";

export default function City({ match, posts }) {
  const { name } = match.params;

  return (
    <div className="page city">
      <Container>
        {name}

        {posts &&
          posts
            .filter((post) => post.city.toLowerCase() === name.toLowerCase())
            .map((post) => (
              <Post key={post.id} user={post.user} text={post.text}></Post>
            ))}
      </Container>
    </div>
  );
}
