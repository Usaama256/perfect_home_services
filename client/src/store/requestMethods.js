import axios from "axios";
axios.defaults.withCredentials = true;

export const BASE_URL = "http://localhost:0000";

export const myRequest = axios.create({
  baseURL: BASE_URL,
});

//Lazy import retry start
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const lazyImportRetry = async (
  importFn,
  navigate,
  retries = 5,
  interval = 1000
) => {
  try {
    return await importFn();
  } catch (error) {
    if (retries) {
      console.error(`Error: Failed to load splitted chunk:::${retries}`);
      console.error(error);
      await wait(interval);
      return lazyImportRetry(importFn, navigate, retries - 1, interval);
    } else {
      console.error(error);
      if (navigate) {
        return { default: navigate };
      } else {
        return { default: () => "Failed" };
      }
    }
  }
};
//Lazy import retry end
