import React, { useContext } from 'react';
import { TaskContext } from './utils/TaskContext';

const Task = ({ task }) => {
    const { toggleTaskCompletion, deleteTask } = useContext(TaskContext);

    return (
        <div className="task-item" style={{backgroundColor: task.completed ? '#e8f3e1' : ''}}>
            <label className="task-label">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="task-checkbox"
                />
                <span className="checkmark"></span>
                <span>{task.text}</span>
            </label>
            <span id='remove-icon' onClick={() => deleteTask(task.id)}>x</span>
        </div>
    )

    // return (
        // <div style={{ backgroundColor: task.completed ? '#e8f3e1' : '' }}
        //     className='task-item'
        //     onClick={() => toggleTaskCompletion(task.id)}
        // >
        //     <span style={{
        //         textDecoration: task.completed ? 'line-through' : 'none',
        //     }}>{task.text}</span>
        //     <span onClick={() => deleteTask(task.id)}>X</span>
        // </div>
    // );
};

export default Task;
