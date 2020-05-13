import axios from "axios";

export function getCities() {
  axios
    .get("./data.json")
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}
