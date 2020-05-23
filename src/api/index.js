import axios from 'axios';
const BASE_URL = 'http://www.leinov.com'
axios.defaults.baseURL = BASE_URL;

// 请求拦截
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
// 响应拦截
axios.interceptors.response.use(function (res) {
    if (res.status === 200) {
        return res.data;
    } else {
        return Promise.reject(error);   
    }
  }, function (error) {
    return Promise.reject(error); 
  });

// get请求
export function get (url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then(res => {
            resolve(res);
        }).catch(err => {

        })
    }) 
}
