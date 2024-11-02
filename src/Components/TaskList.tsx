import React, { useContext, useMemo } from 'react';
import { TaskContext } from './utils/TaskContext';
import Task from './Task';

type TaskType = {
  id: number;
  text: string;
  completed: boolean;
};

const TaskList: React.FC = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("TaskList must be used within a TaskProvider");
  }

  const { tasks, filter, searchTerm } = context;

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: TaskType) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'completed' && task.completed) ||
        (filter === 'incomplete' && !task.completed);
      const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, searchTerm]);

  return (
    <div>
      {filteredTasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
