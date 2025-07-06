import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { saveToLocal, loadFromLocal, removeFromLocal } from "./utils/LocalStorage";

function App() {
  const [username, setUsername] = useState(loadFromLocal("username", ""));
  const [tasks, setTasks] = useState(() => loadFromLocal("tasks", []));
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    saveToLocal("username", username);
  }, [username]);

  useEffect(() => {
    saveToLocal("tasks", tasks);
  }, [tasks]);

  const handleLogout = () => {
    removeFromLocal("username");
    setUsername("");
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  if (!username) return <Login setUsername={setUsername} />;

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome, {username}!</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <TaskForm tasks={tasks} setTasks={setTasks} editingTask={editingTask} setEditingTask={setEditingTask} />
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} setEditingTask={setEditingTask} />
    </div>
  );
}

export default App;
