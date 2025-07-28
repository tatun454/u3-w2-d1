import React from "react";

const Error = ({ message }) => {
  return (
    <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default Error;
