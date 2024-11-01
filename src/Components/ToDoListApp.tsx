import React from 'react';
import './toDoList.css';
import { TaskProvider } from './utils/TaskContext';
import SearchBox from './SearchBox';
import HeaderButtons from './HeaderButtons';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

function ToDoListApp() {
  return (
    <TaskProvider>
      <div className="to-do-list-app">
        <div className='first-row'>
          <h1>Today</h1>
          <SearchBox />
          <HeaderButtons />
        </div>
        <TaskList />
        <TaskInput />
      </div>
    </TaskProvider>
  );
}

export default ToDoListApp;
