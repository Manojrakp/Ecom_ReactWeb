import axios from "axios";

const apiClient = axios.create({
  //  baseURL: "http://localhost:3005",
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("Outgoing Request:", {
      url: config.baseURL + config.url,
      method: config.method,
      headers: config.headers,
      data: config.data,
      params: config.params,
    });
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
