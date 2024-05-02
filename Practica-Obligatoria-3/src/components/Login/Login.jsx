import React, { useState } from "react";

const Login = () => {
  const [inputPre, setInputPre] = useState("");

  const verf = inputPre.toLowerCase().includes("o");

  const handlerInputPreview = (event) => {
    setInputPre(event.target.value);
    if (verf) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const verifyRegister = () => {
    if (inputPre === "" || verf) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <>
      <div className="mb-3">
        <form className="form-control input-group justify-content-center">
          <input
            type="text"
            placeholder="Username"
            onChange={handlerInputPreview}
            value={inputPre}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={verifyRegister}
          >
            Registrarse
          </button>
          <p className="input-group mb-3 justify-content-center">{inputPre}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
