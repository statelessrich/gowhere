import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Post from "../../components/post/Post";

import "./city.scss";
import "./city-desktop.scss";

export default function City({ match }) {
  // city/:name
  const { name } = match.params;

  const cities = useSelector((state) => state.cityReducer.cities);
  const posts = useSelector((state) => state.postReducer.posts);
  const isLoadingPosts = useSelector((state) => state.postReducer.isLoading);
  const postsError = useSelector((state) => state.postReducer.error);

  const [city, setCity] = useState(null);
  const [cityPosts, setCityPosts] = useState([]);

  const [pageName, setPageName] = useState(null);

  useEffect(() => {
    setPageName(name);
  }, [name]);

  useEffect(() => {
    // validate city exists.
    const currentCity = cities.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (currentCity) {
      setCity(currentCity.name);
    }
  }, [cities]);

  useEffect(() => {
    // filter posts by city
    if (city) {
      const foundPosts = posts.filter(
        (item) => item.city.toLowerCase() === city.toLowerCase(),
      );

      if (foundPosts) {
        setCityPosts(foundPosts);
      }
    }
  }, [posts]);

  return (
    <div className="page city">
      {city && cityPosts.length > 0 ? (
        <Container className="city-content">
          <div
            className="city-header"
            style={{
              backgroundImage: `url("/static/img/cities/${city}.jpg")`,
            }}
          >
            <div className="overlay"></div>
            <h2 className="city-name">{city}</h2>
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
