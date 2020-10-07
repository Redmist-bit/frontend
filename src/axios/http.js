import axios from "axios";

export default axios.create({
  baseURL: "https://testapi-trinity.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
