import React, { useState } from 'react';
import TaskForm from './component/TaskForm'; 
import TaskList from './component/TaskList';
import EditTaskForm from './component/EditTaskForm'; 
import './App.css'; 


function App() {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Add Task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Edit Task
  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);  // Update the tasks array with the edited task
  };

  // Save Edited Task
  const saveTask = (updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTask.index ? updatedTask : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTask(null);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {isEditing ? (
        <EditTaskForm task={currentTask} saveTask={saveTask} />
      ) : (
        <TaskForm addTask={addTask} />
      )}
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={updateTask} />
    </div>
  );
}

export default App;
