import axios from "axios";
import endpoints from "./endpoints";

export function getCities() {
  return axios.get(endpoints.cities.get);
}

export function getPosts() {
  return axios.get(endpoints.posts.get);
}
