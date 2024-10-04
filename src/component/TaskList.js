import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          updateTask={(updatedTask) => updateTask(index, updatedTask)}  // Pass updateTask prop
        />
      ))}
    </ul>
  );
}

export default TaskList;
