import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
    return sort.column === column ? (
      sort.direction === 'ascending' ? (
        <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faCaretUp} />
      ) : (
        <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faCaretDown} />
      )
    ) : undefined;
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
    <div className='table-responsive'>
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
    </div>
  );
};

export default Table;
