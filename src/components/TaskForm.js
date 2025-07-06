import React, { useState, useEffect } from "react";

function TaskForm({ tasks, setTasks, editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      const updatedTasks = tasks.map(t =>
        t.id === editingTask.id ? { ...t, title, description } : t
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([newTask, ...tasks]);
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;
