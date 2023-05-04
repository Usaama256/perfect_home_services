import axios from "axios";
axios.defaults.withCredentials = true;

export const BASE_URL = "http://localhost:5050";

export const myRequest = axios.create({
  baseURL: BASE_URL,
});
