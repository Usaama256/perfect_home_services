import axios from "axios";
axios.defaults.withCredentials = true;

export const BASE_URL =
  "https://perfect-home-services-lruh4.ondigitalocean.app";
// export const BASE_URL = "http://localhost:5427";

export const myRequest = axios.create({
  baseURL: BASE_URL,
});
