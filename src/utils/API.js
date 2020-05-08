import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/';
const OPTIONS = '?results=100&nat=US&inc=name,email,phone,dob,picture,id';

export default {
  getUsers: () => {
    return axios.get(BASEURL + OPTIONS);
  }
};
