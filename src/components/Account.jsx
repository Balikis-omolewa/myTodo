import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      // Call the onLogin function to update the user state
      onLogin({ name, email });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h1 style={{fontWeight: "550"}}><span style={{ color: "#9280ff" }}>My</span>Account</h1>
      <marquee>
      <h6 style={{textAlign: "center", fontSize: "20px", marginTop: "3%", marginBottom: "15px",
         fontWeight: "600", color: "#d2cee9"}}>New Here! Sign In and Discover</h6></marquee>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default LoginForm;
