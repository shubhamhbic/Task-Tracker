import React from "react";

function TaskItem({ task, setTasks, setEditingTask }) {
  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(prev => prev.filter(t => t.id !== task.id));
    }
  };

  const startEdit = () => {
    setEditingTask(task);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : "pending"}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <small>{new Date(task.createdAt).toLocaleString()}</small>
      <div>
        <button onClick={toggleComplete}>
          {task.completed ? "Mark Pending" : "Mark Completed"}
        </button>
        <button onClick={startEdit}>Edit</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
