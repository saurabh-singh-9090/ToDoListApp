import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: string) => void;
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  undo: () => void;
  redo: () => void;
  pastStates: any;
  futureStates: any;
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pastStates, setPastStates] = useState([]);
  const [futureStates, setFutureStates] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: string) => {
    if (!task.trim()) return;
    updateTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateTasks(newTasks);
  };

  const deleteTask = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    updateTasks(newTasks);
  };

  const updateTasks = (newTasks) => {
    // Save the current state to past states
    setPastStates((prev) => [...prev, tasks]);
    // Clear future states on any new action
    setFutureStates([]);
    setTasks(newTasks);
  };

  const undo = () => {
    if (pastStates.length === 0) return;
    const previousTasks = pastStates[pastStates.length - 1];
    setFutureStates((future) => [tasks, ...future]);
    setPastStates((past) => past.slice(0, -1));
    setTasks(previousTasks);
  };

  const redo = () => {
    if (futureStates.length === 0) return;
    const nextTasks = futureStates[0];
    setPastStates((past) => [...past, tasks]);
    setFutureStates((future) => future.slice(1));
    setTasks(nextTasks);
  };

  return (
    <TaskContext.Provider value={{
      tasks, addTask, toggleTaskCompletion, deleteTask, filter, setFilter, searchTerm, setSearchTerm, undo, redo,pastStates,futureStates
    }}>
      {children}
    </TaskContext.Provider>
  );
};
