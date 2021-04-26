import axios from 'axios';
const api = axios.create({
    baseURL: 'http://191.252.178.120:3000'
});

export default api;