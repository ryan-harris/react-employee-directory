import React from 'react';
import Search from './Search';
import API from '../utils/API';
import Row from './Row';

export default class DirectoryContainer extends React.Component {
  state = {
    employees: [],
    search: ''
  };

  componentDidMount = () => {
    API.getUsers()
      .then((employees) => this.setState({ employees }))
      .catch((err) => console.log(err));
  };

  renderEmployees = () => {
    return this.state.employees.map((emp) => <Row employee={emp} />);
  };

  render() {
    return (
      <div className='py-2 px-5'>
        <Search
          handleInputChange={(e) => this.setState({ search: e.target.value })}
          search={this.state.search}
        />
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
