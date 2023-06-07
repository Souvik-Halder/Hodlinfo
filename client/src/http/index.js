
import axios from 'axios';
const REACT_APP_API_URL = 'http://localhost:4000/api';
const api = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})





//List of all the endpoints

export const fetchData = async () => api.get('/getCoins');




export default api;