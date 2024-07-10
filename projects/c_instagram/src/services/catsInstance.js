import axios from "axios";

const CATS_URL = "https://api.thecatapi.com/";
const CATS_API_KEY = "live_Y5UxCFilHGWhxDj4pwNjKq7GueWG7Hz9Mi10RT6V9SdyGrUiDvHqrQihK6GrceJy";
const catsIntance = axios.create({
  baseURL: CATS_URL,
  headers: {
    "x-api-key": CATS_API_KEY,
  },
});
export default catsIntance;
