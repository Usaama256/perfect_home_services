import axios from "axios";
axios.defaults.withCredentials = true;

export const BASE_URL = "http://localhost:0000";

export const myRequest = axios.create({
  baseURL: BASE_URL,
});
