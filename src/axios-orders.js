import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-app-85163.firebaseio.com/'
});

export default instance;