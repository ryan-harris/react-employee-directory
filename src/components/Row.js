import React from 'react';

const Row = ({ employee }) => {
  return (
    <tr key={employee.id}>
      <td>
        <img src={employee.image} alt='Employee Profile' />
      </td>
      <td>{employee.name}</td>
      <td>{employee.phone}</td>
      <td>
        <a href={`mailto:${employee.email}`}>{employee.email}</a>
      </td>
      <td>{employee.dob}</td>
    </tr>
  );
};

export default Row;
