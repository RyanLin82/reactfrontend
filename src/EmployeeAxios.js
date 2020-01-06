import axios from './axios';


export const getAll = () => axios.get('/employee.json');
export const post= (postData) => axios.post("/employee.json", postData);
   
