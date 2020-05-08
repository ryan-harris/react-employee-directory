import React, { useState, useEffect } from 'react';
import Search from './Search';
import API from '../utils/API';
import Table from './Table';

const ListContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    API.getUsers()
      .then((res) =>
        setEmployees(
          res.data.results.map((emp) => ({
            id: emp.id.value,
            name: `${emp.name.first} ${emp.name.last}`,
            email: emp.email,
            phone: emp.phone,
            dob: new Date(emp.dob.date),
            image: emp.picture.medium
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const filterEmployees = () => {
    const filter = search.toLowerCase();
    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(filter) ||
        emp.email.toLowerCase().includes(filter) ||
        emp.phone.toLowerCase().includes(filter) ||
        emp.dob.toLocaleString().includes(filter)
    );
  };

  return (
    <div className='py-2 px-5'>
      <Search
        handleInputChange={(e) => setSearch(e.target.value)}
        search={search}
      />
      <Table employees={filterEmployees()} />
    </div>
  );
};

export default ListContainer;
