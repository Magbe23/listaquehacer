import React, { useState } from 'react';
import './App.css';
const TaskListApp = () => {
  const [tasks, setTasks] = useState([
    { text: 'Hacer la compra', completed: false },
    { text: 'Estudiar para el examen', completed: false },
    { text: 'Hacer ejercicio', completed: true },
  ]);

  const toggleTaskCompletion = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = index => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const addTask = text => {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          const text = e.target.task.value.trim();
          if (text) {
            addTask(text);
            e.target.task.value = '';
          }
        }}
      >
        <input type="text" name="task" />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default TaskListApp;
