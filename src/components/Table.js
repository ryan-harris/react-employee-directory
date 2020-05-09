import React, { useState } from 'react';
import Row from './Row';

const Table = ({ employees }) => {
  const [sort, setSort] = useState({
    column: '',
    direction: ''
  });

  const handleSort = (column) => {
    let direction = 'ascending';
    if (sort.column === column && sort.direction === 'ascending') {
      direction = 'descending';
    }

    setSort({ column, direction });
  };

  const renderArrow = (column) => {
    return sort.column === column
      ? sort.direction === 'ascending'
        ? ' ⯅'
        : ' ⯆'
      : undefined;
  };

  const renderColumnHeader = (column, sortable) => {
    return (
      <th scope='col'>
        {sortable ? (
          <span onClick={() => handleSort(column.toLowerCase())}>
            {column}
            {renderArrow(column.toLowerCase())}
          </span>
        ) : (
          column
        )}
      </th>
    );
  };

  const renderEmployees = () => {
    const sortEmployees = [...employees];
    return sortEmployees
      .sort((a, b) => {
        if (a[sort.column] < b[sort.column]) {
          return sort.direction === 'ascending' ? -1 : 1;
        }
        if (a[sort.column] > b[sort.column]) {
          return sort.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      })
      .map((emp) => <Row employee={emp} key={emp.id} />);
  };

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          {renderColumnHeader('Image', false)}
          {renderColumnHeader('Name', true)}
          {renderColumnHeader('Phone', true)}
          {renderColumnHeader('Email', true)}
          {renderColumnHeader('DOB', true)}
        </tr>
      </thead>
      <tbody>{renderEmployees()}</tbody>
    </table>
  );
};

export default Table;
