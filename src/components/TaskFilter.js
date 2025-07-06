import React from "react";

function TaskFilter({ filter, setFilter, tasks }) {
  const count = type =>
    type === "all"
      ? tasks.length
      : tasks.filter(t => t.completed === (type === "completed")).length;

  return (
    <div className="task-filter">
      <button onClick={() => setFilter("all")}>All ({count("all")})</button>
      <button onClick={() => setFilter("completed")}>Completed ({count("completed")})</button>
      <button onClick={() => setFilter("pending")}>Pending ({count("pending")})</button>
    </div>
  );
}

export default TaskFilter;
