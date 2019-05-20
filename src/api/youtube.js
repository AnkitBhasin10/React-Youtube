import axios from "axios";

const KEY = "AIzaSyBR7MU7VNyj-nSakk5R-14poTYqfYONpEY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
