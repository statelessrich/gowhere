import React from "react";
import Container from "react-bootstrap/Container";
import "./home.scss";

import Post from "./../../components/post/Post";

export default function Home({ posts }) {
  return (
    <div className="page home">
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            city={post.city}
            user={post.user}
            text={post.text}
          ></Post>
        ))}
      </Container>
    </div>
  );
}
