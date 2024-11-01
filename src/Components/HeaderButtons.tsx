import React, { useContext } from 'react';
import { TaskContext } from './utils/TaskContext';

const FilterButtons = () => {
  const { setFilter, filter} = useContext(TaskContext);

  return (
    <div className='filter-btns'>
      <button style={{backgroundColor: filter === 'all' ? '#4caf50' : ''}} onClick={() => setFilter('all')}>All</button>
      <button style={{backgroundColor: filter === 'completed' ? '#4caf50' : ''}} onClick={() => setFilter('completed')}>Completed</button>
      <button style={{backgroundColor: filter === 'incomplete' ? '#4caf50' : ''}} onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;
