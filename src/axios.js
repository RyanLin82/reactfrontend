import axios from 'axios';


const instance = axios.create({

    baseURL: 'https://icctreact.firebaseio.com/',
    headers: {'X-Custom-Header': 'cm, icct'}

});

export default instance;