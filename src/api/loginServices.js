import apiClient from "./apiClient";

async function fetchlogin(username, password) {
  const response = await apiClient.post("/login", { username, password });
  console.log("fetchlogin response data:", JSON.stringify(response, null, 2));
  sessionStorage.setItem("token", response.data.token);
  const to = sessionStorage.getItem("token");
  console.log("From Session Storage--> ", to);
}
export default fetchlogin;
