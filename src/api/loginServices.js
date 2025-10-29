import apiClient from "./apiClient";

async function fetchlogin(username, password) {
  const response = await apiClient.post("/login", { username, password });
  console.log(
    "fetchlogin response data:---->",
    JSON.stringify(response, null, 2)
  );
  sessionStorage.setItem("token", response.data.token);
  const token = response.data.token;

  if (token) {
    sessionStorage.setItem("token", token);
    console.log("Token saved to session:", token);
  }

  return token;
}
export default fetchlogin;
