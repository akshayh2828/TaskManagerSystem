import React, { useState } from 'react';

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  // Function to handle edit form visibility
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save/update of the task
  const handleUpdateClick = () => {
    if (editedTitle.trim() && editedDescription.trim()) {
      updateTask({
        ...task,
        title: editedTitle,
        description: editedDescription,
      });
      setIsEditing(false); // Close the edit form
    } else {
      alert("Title and Description cannot be empty!"); // Validation
    }
  };

  return (
    <li>
      {isEditing ? (
        // Editable form to update task details
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Edit Title"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Edit Description"
          />
          <button onClick={handleUpdateClick}>Save</button>
        </div>
      ) : (
        // Display mode (when not editing)
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      )}
      
      {/* Display Edit/Delete buttons when not editing */}
      {!isEditing && (
        <>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;


