import { useState } from "react";
import { useAuth } from "../hooks/context/AuthContext";
import fetchlogin from "../api/loginServices";
import "./loginPage.css";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchlogin(username, password);
      login(data);
      console.error(" Login resp :- ", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(" Login failed:- ", error);
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="login-form"
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        className="login-form"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="login-form">
        Login
      </button>
    </form>
  );
}
