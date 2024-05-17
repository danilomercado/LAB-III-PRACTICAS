import React, { useState } from "react";

const NewTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  const handerChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handerChange}
        placeholder="Agregar tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default NewTask;
