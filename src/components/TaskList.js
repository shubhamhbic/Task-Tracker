import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, setEditingTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          setTasks={setTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
