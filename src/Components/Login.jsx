import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setCredentials } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
