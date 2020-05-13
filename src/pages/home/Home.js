import React from "react";
import Container from "react-bootstrap/Container";
import "./home.scss";

import Post from "./../../components/post/Post";

export default function Home({ cities }) {
  return (
    <div className="page home">
      <Container>
        {cities &&
          cities.map((city) =>
            city.posts.map((post) => (
              <Post
                key={post.id}
                city={city.name}
                user={post.user}
                text={post.text}
              ></Post>
            )),
          )}
      </Container>
    </div>
  );
}
