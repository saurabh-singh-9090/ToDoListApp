import React, { useContext } from 'react';
import { TaskContext } from './utils/TaskContext';

const FilterButtons = () => {
  const { setFilter } = useContext(TaskContext);

  return (
    <div className='filter-btns'>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;
