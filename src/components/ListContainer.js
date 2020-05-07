import React from 'react';
import Search from './Search';
import API from '../utils/API';

export default class DirectoryContainer extends React.Component {
  state = {
    employees: []
  };

  componentDidMount = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results.map((emp) => ({
            id: emp.id.value,
            name: `${emp.name.first} ${emp.name.last}`,
            email: emp.email,
            phone: emp.phone,
            dob: new Date(emp.dob.date).toLocaleDateString(),
            image: emp.picture.medium
          }))
        })
      )
      .catch((err) => console.log(err));
  };

  renderEmployees = () => {
    return this.state.employees.map((emp) => (
      <tr key={emp.id}>
        <td>
          <img src={emp.image} alt='Employee Profile' />
        </td>
        <td>{emp.name}</td>
        <td>{emp.phone}</td>
        <td>
          <a href={`mailto:${emp.email}`}>{emp.email}</a>
        </td>
        <td>{emp.dob}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className='py-2 px-5'>
        <Search />
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Image</th>
              <th scope='col'>Name</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Email</th>
              <th scope='col'>DOB</th>
            </tr>
          </thead>
          <tbody>{this.renderEmployees()}</tbody>
        </table>
      </div>
    );
  }
}
