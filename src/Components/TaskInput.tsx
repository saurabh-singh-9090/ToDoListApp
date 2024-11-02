import React, { useContext, useState } from 'react';
import { TaskContext } from './utils/TaskContext';

const TaskInput = () => {
  const { addTask, undo, redo, pastStates, futureStates } = useContext(TaskContext);
  const [input, setInput] = useState<string>('');

  const handleAddTask = () => {
    addTask(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='input-text-box'
      />
      <button className='add-task-btn' onClick={() => { handleAddTask(); setInput(''); }}>Add Task</button>
      <button className='undo-task-btn' onClick={undo} disabled={pastStates.length === 0}>Undo</button>
      <button className='undo-task-btn' onClick={redo} disabled={futureStates.length === 0}>Redo</button>
    </div>
  );
};

export default TaskInput;
