import React, { useContext, useState } from 'react';
import { TaskContext } from './utils/TaskContext';

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Type something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='input-text-box'
      />
      <button className='add-task-btn' onClick={() => { addTask(input); setInput(''); }}>Add Task</button>
    </div>
  );
};

export default TaskInput;
