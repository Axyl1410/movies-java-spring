import axios from "axios";

export default axios.create({
  baseURL: "https://movie.nguyentruonggiang.id.vn",
  timeout: 5000,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});
