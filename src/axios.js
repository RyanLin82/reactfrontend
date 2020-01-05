import axios from 'axios';


const instance = axios.create({

    baseURL: 'https://icctreact.firebaseio.com/',
    headers: {'X-Custom-Header': 'cm, icct'}

});


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("[axios interceptors request]");
    return config;
  }, function (error) {
    // Do something with request error
    console.log("[axios interceptors request error]");
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("[axios interceptors response]");
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("[axios interceptors response error]");
    return Promise.reject(error);
});


export default instance;