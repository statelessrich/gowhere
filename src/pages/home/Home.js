import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import "./home.scss";
import "./home-desktop.scss";

import Post from "./../../components/post/Post";

export default function Home() {
  const posts = useSelector((state) => state.postReducer.posts);
  const isLoading = useSelector((state) => state.postReducer.isLoading);
  const error = useSelector((state) => state.postReducer.error);
  
  return (
    <div className="page home">
      <Container className="home-content">
        {posts &&
          posts.map((post) => (
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
