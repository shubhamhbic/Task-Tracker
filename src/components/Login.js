import React, { useState } from "react";

function Login({ setUsername }) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) setUsername(input);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
