import React from "react";

const Login = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-primary black"
        type="button"
        id="button-addon2"
      >
        Acceder
      </button>
    </div>
  );
};

export default Login;