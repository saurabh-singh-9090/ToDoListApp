import React, { useContext, useMemo } from 'react';
import { TaskContext } from './utils/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks, filter, searchTerm } = useContext(TaskContext);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesFilter = filter === 'all' ||
                            (filter === 'completed' && task.completed) ||
                            (filter === 'incomplete' && !task.completed);
      const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, searchTerm]);

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
