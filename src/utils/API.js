import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/';
const OPTIONS = '?results=100&nat=US&inc=name,email,phone,dob,picture,id';

export default {
  getUsers: () => {
    return axios.get(BASEURL + OPTIONS).then((res) => {
      return res.data.results.map((emp) => ({
        id: emp.id.value,
        name: `${emp.name.first} ${emp.name.last}`,
        email: emp.email,
        phone: emp.phone,
        dob: new Date(emp.dob.date).toLocaleDateString(),
        image: emp.picture.medium
      }));
    });
  }
};
