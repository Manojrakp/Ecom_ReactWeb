import apiClient from "./apiClient";

export const fetchPreloginHome = async (payload) => {
  console.log("Calling /home/prelogin with payload:", payload);

  const response = await apiClient.post("/home/prelogin", payload);
  console.log("Response:", response.data);

  return response.data;
};
