import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
          <button onClick={() => deleteTask(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
