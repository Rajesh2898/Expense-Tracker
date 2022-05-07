import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const onFilterYearHandler = (event) => {
    const FilterYear = event.target.value;
    props.onPassYear(FilterYear);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value ={props.selected} onChange={onFilterYearHandler}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;