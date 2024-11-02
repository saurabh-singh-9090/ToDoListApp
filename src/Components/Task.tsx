import React, { useContext } from 'react';
import { TaskContext } from './utils/TaskContext';

type TaskProps = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Task must be used within a TaskProvider");
  }

  const { toggleTaskCompletion, deleteTask } = context;

  return (
    <div className="task-item" style={{ backgroundColor: task.completed ? '#e8f3e1' : '' }}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="task-checkbox"
        />
        <span className="checkmark"></span>
        <span>{task.text}</span>
      </label>
      <span id="remove-icon" onClick={() => deleteTask(task.id)}>x</span>
    </div>
  );
};

export default Task;
