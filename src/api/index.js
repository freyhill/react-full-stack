import axios from 'axios';
const BASE_URL = 'http://localhost:3000'
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // 响应拦截
axios.interceptors.response.use(function (res) {
    if (res.status === 200 || res.status === 201) {
        return res.data;
    } else {
        return Promise.reject('error');   
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
            reject(err)
        })
    }) 
}

// post请求
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url,data).then(res => {
            console.log('res', res);
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

// put请求
export function put(url, data) {
    return new Promise((resolve, reject) => {
        axios.put(url,data).then(res => {
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

//delete请求
export function del(url, data) {
    return new Promise((resolve, reject) => {
        axios.delete(url, data).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}