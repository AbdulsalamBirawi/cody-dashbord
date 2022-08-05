import { BASE_URL } from "../env";

export const fetchWithJwt = (url, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  if (options.headers) {
    options.headers = { ...options.headers, ...headers };
  } else {
    options.headers = headers;
  }

  return fetch(BASE_URL + url, options);
};
