import React from "react";

function Welcome({ user }) {
  return (
    <div className="welcome-container" style={{ textAlign: "right", marginBottom: "20px" }}>
      <h5>Hi, {user.name}!</h5>
    </div>
  );
}

export default Welcome;
